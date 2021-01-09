import React, {Component} from "react";
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "./HeaderStyle";
import {NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {
        const { menuFixed } = this.state

        return(
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item as={NavLink} to={"/"} exact={true}>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png'/>
                                <Menu.Item header>
                                    Movie App
                                </Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={NavLink} to={"/movies"} exact={true}>
                                Movies
                            </Menu.Item>
                            <Menu.Item as={NavLink} to={"/movie/new"} exact={true}>
                                New Movie
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}

export default Header;