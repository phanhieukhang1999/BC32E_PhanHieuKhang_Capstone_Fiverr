import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import styled from 'styled-components'

export default function HomeTemplate() {
  return (
    <Container className="MainLayout">
      <Header />

      <main className='main-content'>
        <Outlet />

      </main>

      <hr />
      <Footer />

    </Container>
  )
}

const Container = styled.div`
  &.MainLayout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .Header {

    }
    .main-content {
      flex: 1;
      /* margin: 130px 0; */
      /* margin-top: 170px; */
    }

    .Footer {

    }
  }
`