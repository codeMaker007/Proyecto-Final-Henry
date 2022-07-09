import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const colorRadioButton = '#FFC400'

export default function Categorias({ setState, state, total }) {
    const [select, setSelect] = useState('null');

    useEffect(() => {
        setSelect(state.categoria)
    }, [state])

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Componentes PC</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Wrapper>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="null"
                                checked={select === "null"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value); }}
                            />
                            <RadioButtonLabel />
                            <div>Todos los productos {`(${total})`}</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="MotherBoard"
                                checked={select === "MotherBoard"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value); }}
                            />
                            <RadioButtonLabel />
                            <div>MotherBoards</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="RAM"
                                checked={select === "RAM"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Memorias RAM</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Micro-procesador"
                                checked={select === "Micro-procesador"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Procesadores</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="SSD"
                                checked={select === "SSD"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Discos solidos</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="HDD"
                                checked={select === "HDD"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Discos duros</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="M.2NVme"
                                checked={select === "M.2NVme"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>M.2NVme</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Placa de video"
                                checked={select === "Placa de video"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Placas de video</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Monitor"
                                checked={select === "Monitor"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Monitores</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Fuente de alimentación"
                                checked={select === "Fuente de alimentación"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Fuentes</div>
                        </Item>
                    </Wrapper>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Perifericos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Wrapper>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Teclados"
                                checked={select === "Teclados"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Teclados</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Auriculares"
                                checked={select === "Auriculares"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Auriculares</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Mouse"
                                checked={select === "Mouse"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Mouse</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Mousepad"
                                checked={select === "Mousepad"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Mousepads</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Sillas"
                                checked={select === "Sillas"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Sillas</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Gabinete"
                                checked={select === "Gabinete"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Gabinetes</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Webcam"
                                checked={select === "Webcam"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Webcam</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Parlante"
                                checked={select === "Parlante"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Parlantes</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Micrófono"
                                checked={select === "Micrófono"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Micrófono</div>
                        </Item>
                        <Item>
                            <RadioButton
                                type="radio"
                                name="radio"
                                value="Refrigeración"
                                checked={select === "Refrigeración"}
                                onChange={(e) => { setState({ ...state, categoria: e.target.value }); setSelect(e.target.value) }}
                            />
                            <RadioButtonLabel />
                            <div>Refrigeración</div>
                        </Item>
                    </Wrapper>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

const Wrapper = styled.div`
  font-size: 13px;
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 13%;
  left: 4px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4.5px;
      background: #eeeeee;
    }
  }
  ${(props) =>
        props.checked &&
        ` 
    &:checked + ${RadioButtonLabel} {
      background: ${colorRadioButton};
      border: 1px solid ${colorRadioButton};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 4.5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;
