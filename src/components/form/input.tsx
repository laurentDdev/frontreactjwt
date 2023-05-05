import Label from "./label.tsx";
import "./input.scss"
import {ChangeEventHandler} from "react";

type props = {
    id:string,
    type:string,
    value:any,
    placeholder?:any
    padding?:number
    radius?:number,
    label:string,
    borderColor?:string
    onChange:ChangeEventHandler<HTMLInputElement>
}
const Input = ({id,type,value,placeholder,radius,label,borderColor,padding,onChange} : props) => {
    return (
        <>
            <Label id={id} text={label}></Label>
            <input id={id} onChange={onChange} type={type} value={value} placeholder={placeholder} style={{padding:`${padding}px`,borderRadius:`${radius}px`,border:`2px solid ${borderColor}`}} />
        </>
    );
};

export default Input;