
import { getApp, initializeApp } from "@firebase/app"
import {
    doc,
    getFirestore,
    setDoc,
    getDoc,
    getDocs,
    collection
} from "@firebase/firestore";
import { firebaseConfig } from "../constants";


const initializeAppIfNecessary = () => {
    try {
      return getApp()
    } catch {
      return initializeApp(firebaseConfig)
    }
  }

export default class DatabaseService {


    static saveComplain = async (stationId, busLine, complainId, busTime, uid, freeText, fullName, phoneNumber) => {
        console.log(stationId)
        console.log(busLine)
        console.log(complainId)
        console.log(busTime)
        console.log(uid)
        const db = getFirestore(initializeAppIfNecessary())
        const ref = collection(db, 'complaints')
        const docRef = doc(ref)
        const data = {
            stationId: stationId,
            busLine: busLine,
            busTime: busTime,
            complainDate: new Date(),
            complainId: complainId,
            freeText: freeText,
            fullName: fullName,
            phoneNumber: phoneNumber,
            uid: uid
        }
        await setDoc(docRef, data)
        console.log(docRef.id)
        return docRef.id
    }

    static getStationData = async (stationId) => {
        const db = getFirestore(initializeAppIfNecessary())
        const ref = doc(db, 'stations', stationId)
        try {
            const result = await getDoc(ref)
            const data = result.data()
            return data
        } catch (e) {
            return null
        }
    }
    static getStationLines = async (stationId) => {
        const db = getFirestore(initializeAppIfNecessary())
        const ref = collection(db, `stations/${stationId}/lines`)
        const snapshot = await getDocs(ref)
        const res = {}
        snapshot.forEach((doc) => {
            const data = doc.data()
            res[doc.id] = data
        })
        return res;
    }
}
