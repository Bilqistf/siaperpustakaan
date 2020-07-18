import React , {useReducer} from 'react'
import { Container, Row, Col , Card , CardImg ,Button} from 'reactstrap';

const initialState =
 {
    jumlah: 1,
    hargasatuan: 10000,
    hargatotal: 0
}

const reducer = (state , action ) => {
    switch (action . type) {
        case 'tambah' : return {
            ...state,
            jumlah: state.jumlah + 1
        }
        case 'kurang' : return {
            ...state,
            jumlah: state.jumlah - 1
        } 
        default :
        return state
    }
}
function HooksReducer() {
    const[count, dispacth] = useReducer(reducer, initialState)
    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                <Card>
                    <CardImg top width="80%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                </Card>
                </Col>
                <Col xs="6">
                    <h3> Action Figure Naruto </h3>
                    <p>Harga</p> 
                    <h3>Rp 157.000,- </h3>
                    <p> Jumlah </p>
                    <Row>
                        <Col> <Button onClick={()=>dispacth({type:'tambah'})} color="danger"> + </Button></Col>
                        <Col> {count.jumlah} </Col>
                        <Col> <Button onClick={()=>dispacth('kurang')}> - </Button></Col>
                    </Row>
                    <br/>
                <Button color="success" size="lg"> Total Rp. 500000</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HooksReducer;