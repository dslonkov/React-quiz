import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MenuToogle from '../../component/navigation/menuToggle/MenuToggle'
import Drawer from '../../component/navigation/menuToggle/drawer/Drawer'
import { connect } from 'react-redux';
class Layout extends Component {

  state = {
    menu: false
  }


  toogleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState ({
      menu: false
    })
  }

  
  render() {
    return (
      <div className={classes.Layout}>

      <Drawer 
        isOpen={this.state.menu}
        onClose={this.menuCloseHandler}
        isAuthenticated={this.props.isAuthenticated}
      />

      <MenuToogle
        onToggle={this.toogleMenuHandler}
        isOpen={this.state.menu}
      />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout);