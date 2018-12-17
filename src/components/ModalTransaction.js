import React, { Component } from 'react';
import { Button, Modal, Form, Input, Checkbox, Radio } from 'semantic-ui-react'

class ModalTransaction extends Component {
    state = {
        selectedCbs: [],
        description: '',
        value: 0,
        paymentDate: new Date()
    };

    handleRadio = (e, { value }) => this.setState({ radioSelection: value });
    handleCheckbox = (e, value) => {
        this.setState(prevState => {
            let selectedCbs = [...prevState.selectedCbs];
            if (selectedCbs.includes(value.name)) {
                selectedCbs = selectedCbs.filter(e => e!==value.name);
            } else {
                selectedCbs = [...selectedCbs, value.name];
            }
            return {selectedCbs};
        })
    };
    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value});
    }

    handleSubmit = () => {
        const {description, value, radioSelection, selectedCbs, paymentDate } = this.state;
        const data = { description, totalAmount:value, transactionDate:paymentDate, paidByUser: radioSelection, 
            transactionMembers: selectedCbs.map(user => ({
                user,
                userAmount: value / (selectedCbs.length+1)
            })) 
        }
        this.props.post(data);
    }

    render() {
        const { radioSelection } = this.state;
        return (
            <Modal size='tiny' open={this.props.open} onClose={this.props.close}>

                <Modal.Header>Adicionar despesa</Modal.Header>

                <Modal.Content>
                    <Form>
                        <Form.Field name='description' control={Input} label='Descrição' placeholder='Informe a descrição' onChange={this.handleChange} />
                        <Form.Field name='value' control={Input} label='Valor' placeholder='Informe o valor' onChange={this.handleChange} />
                        <Form.Field>
                            <label>Data do pagamento</label>
                            <input name='paymentDate' type="date" placeholder='Selecione a data' onChange={this.handleChange}></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Participantes</label>
                            { this.props.allUsers && this.props.allUsers.map(
                                user => (<Checkbox key={user._id} label={user.name} onChange={this.handleCheckbox} name={user._id}
                                style={{ paddingRight:'20px' }} />) ) }
                        </Form.Field>
                        <Form.Group>
                            <Form.Field>
                                <label>Pagante</label>
                                { this.props.allUsers && this.props.allUsers.map(
                                    user => (<Radio key={user._id} label={user.name} value={user._id}
                                    checked={radioSelection === user._id} onChange={this.handleRadio} style={{ paddingRight:'20px' }} />) ) }
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Modal.Content>

                <Modal.Actions>
                    <Button negative content='Cancelar' onClick={this.props.close}  />
                    <Button positive content='Confirmar' onClick={this.handleSubmit} />
                </Modal.Actions>

            </Modal>
        );
    }
}


export default ModalTransaction;