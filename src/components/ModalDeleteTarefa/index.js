import React, { useState } from 'react';
import { Button,Modal,ModalBody,ModalFooter,ModalHeader,} from 'reactstrap'; 
import axios from '../../api/axios';
import styled from 'styled-components';
import { IoTrashBin } from "react-icons/io5";

const BotaoDeletar=styled.button`{
  border:none;
  background:#292c2e;
  cursor: pointer;
  border-radius: 5px;
  transition: opacity 0.2 ease-out;
  
  svg{
    height: 25px;
    width: 25px;
    color:#d9d4cc;
  }
  
    :hover{
      background: #ff1925;

    }
  
}`;


const BotaoDeleteTarefa = ({id}) => {
  const [modaldl, setModaldl] = useState(false);
  const toggledl = () => setModaldl(!modaldl);


  function handleDelete(id){
    axios.delete(`/tarefa/${id}`)
    setModaldl(false);
    window.location.reload(1)
  
  }
 
  return (
    <>
      
      <BotaoDeletar onClick={toggledl}><IoTrashBin/></BotaoDeletar>
      <Modal  centered
    
    scrollable isOpen={modaldl} toggle={toggledl}>
        <ModalHeader toggle={toggledl}>Excluir Tarefa</ModalHeader>
        
        <ModalBody style={{  }}>
                              
        <p>
          Deseja realmente excluir esta tarefa permanentemente?
          </p>     
        </ModalBody>
        <ModalFooter style={{justifyContent:'space-evenly' }}>
          
          <Button style={{width:'35%' }} color="secondary" onClick={toggledl}>
            Cancelar
          </Button>
          <Button style={{width:'35%' }} color="danger" onClick={()=>handleDelete(id)}>
           Excluir Tarefa
          </Button>
        </ModalFooter>
        
      </Modal>
    </>
  );
  };

export default BotaoDeleteTarefa ;