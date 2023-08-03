'use client';
import Style from './NavBar.module.css'
import Logo from "@/assets/icons/Logo";
import Row from "@/components/Row"

const NavBar = () => {
    return (
        <Row justifyContent="space-between" padding={[16]} fullWidth className={Style.main}>
            <Logo />
        </Row>
    )
}

export default NavBar;