import React,{useState,useEffect} from 'react'
import {
    Container,
    Navbar,
    NavbarBrand,
    Card,CardBody,
    Table,
    Button
} from 'reactstrap'

function App() {

  const customNavbarStyle = {
    backgroundColor:"blue"
  }
  const [isprinted,setisprinter] = useState(false)

  function youprint(){
    window.print()
    setisprinter(true)
  }

  useEffect(()=>{
    // THIS FUNCTION WILL SHOW OR HIDE
    const showhide  = ()=>{
      setisprinter(false)
    }
    window.addEventListener("afterprint",
      showhide
      )
    return ()=>{
      window.removeEventListener("afterprint",
      showhide
      )
    }

  },[])

  return (
    <>
      <div>
      <style>
      {`
      @media print{
        .hide-on-print{
          display:none;
        }
      }
      `}
      </style>



      <Navbar style={customNavbarStyle}
      light expand="md"
      >
      <NavbarBrand href="/"
      style={{color:"white"}}
     >My Invoice 
      </NavbarBrand>
      </Navbar>

      <Container>
      <Card className="shadow"
      style={{margin:10}}
      > 
      <CardBody>
      <h3>this invoice 11 juni 2023</h3>
      <h5>invoice INV-21-AB</h5>
      <p>Date : 12-12-2022</p>
      <p>Total amout : 15</p>
      <p>Customer : john doe</p>
      </CardBody>

      </Card>
      <Table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>job</th>
          </tr>
      </thead>
      <tbody>
      <tr>
      <td>Budi</td>
      <td>12</td>
      <td>employee</td>
      </tr>
      </tbody>
      </Table>

      {/*AND CREATE BUTTON IF YOU PRINT PREVIEW*/}
      {/*THIS BUTTON WILL HIDE */}
      {!isprinted &&(
        <Button color="primary"
        onClick={youprint}
        className="hide-on-print"
        >
        print this page and hide this button
        </Button>
        )}

      </Container>

       </div>
    </>
  )
}

export default App
