import React from 'react'
import Sidebar from 'react-sidebar'
import { Icon, Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const SidebarContent = ({ isSignedIn, toggleSidebar }) => (
  <div className='Layout-Sidebar'>
    <nav className='Layout-nav'>
      <Link
        to='/' className='Layout-brand'>SanConnect</Link>
    </nav>
    {isSignedIn ? (
      <p>signed in</p>
    ) : (
      <div>
        <Link to='/sign-up' onClick={toggleSidebar}>
          <Button
            primary size='huge'
            style={{ width: '-webkit-fill-available', marginTop: '2vh' }}
          >
            Criar uma Conta
          </Button>
        </Link>
        <Link to='/explore' onClick={toggleSidebar}>
          <Button
            color='olive' size='huge'
            style={{ width: '-webkit-fill-available', marginTop: '2vh' }}
          >
            Explorar Eventos
          </Button>
        </Link>
        <Link to='/sign-in' onClick={toggleSidebar}>
          <Button
            secondary size='huge'
            style={{ width: '-webkit-fill-available', marginTop: '2vh' }}
          >
            Acesse sua Conta
          </Button>
        </Link>
      </div>
    )}
  </div>
)

class LayoutMobile extends React.Component {
  state = {
    sidebarOpen: true
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen
    }), () => console.log(this.state))
  }

  onSetSidebarOpen = sidebarOpen => {
    this.setState({ sidebarOpen })
  }

  render() {
    const { isSignedIn, children } = this.props
    return (
      <Sidebar
        sidebar={(
          <SidebarContent
            isSignedIn={isSignedIn}
            toggleSidebar={this.toggleSidebar}
          />
        )}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <nav className='Layout-nav'>
          <Link to='/' className='Layout-brand'>SanConnect</Link>
          <Icon
            id='Layout-Icon'
            name='bars' size='large'
            onClick={this.toggleSidebar}
          />
        </nav>
        <div id='Layout-mobile'>
          {children}
        </div>
      </Sidebar>
    )
  }
}

export default LayoutMobile
