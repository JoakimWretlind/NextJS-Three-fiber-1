import { Nav, Inner, Logo, Header } from "./style"

export const Navbar = () => {
    return (
        <Nav>
            <Inner>
                <Logo src="/images/logo-1.svg" alt="jw logo" />
                <Header>three fiber with nextJS</Header>
            </Inner>
        </Nav>
    )
}
