import {FC, ReactElement, ReactNode, useState} from "react";
import {Accordion, AccordionWithTotlaControl} from "../../components/Accordion";


type ListPropsType = {
    data?: Array<{ name: string, id: string }>
    render?: () => ReactNode | ReactElement
}
const AccordionBody: FC<ListPropsType> = ({data, render}) => {

    return (
        <ul>
            {data ? data.map(d => (
                <>
                    <li  key={d.id}>{d.name}</li>

                </>
            )): render ? render(): <p>No data</p>}

        </ul>
    )
}


const list = [
    {name: 'Farid', id: crypto.randomUUID()},
    {name: 'Jack', id: crypto.randomUUID()},
    {name: 'Peter', id: crypto.randomUUID()},
]


export const ControlledAccordion: FC = () => {

    return (
        <Accordion
            isOpen={false}
            body={(
                <>
                    <Accordion isOpen={true} body={<AccordionBody data={list}/>} title={'-- Users --'}/>
                    <Accordion body={<AccordionBody render={() => <h2>Hello</h2>}/>} title={'-- Greeting --'}/>
                    <Accordion body={<AccordionBody render={() => <img src="https://shorturl.at/duENT" alt="d"/>}  />} title={'-- Nature --'} />
                    <Accordion body={<AccordionBody render={() => <img src="https://shorturl.at/duENT" alt="d"/>}  />} title={'-- Nature --'} />

                </>
            )}
            title={'Show Info'}
            trigger={(toggleAccordion, title) => <button onClick={toggleAccordion}>{title}</button>}
        />
    )
}

export const FullyControlledAccordion: FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleAccordion = () => {
        setOpen(open => !open)
    }


    return <AccordionWithTotlaControl
        isOpen={open}
        body={<AccordionBody data={list}/>}
        trigger={(toggleAccordion, title) => <button onClick={toggleAccordion}>{title}</button>}
        title={'-- AccordionWithTotlaControl --'}
        onClickHandler={toggleAccordion}
    />

}

export const UnControlledAccordion: FC = () => {
    return (
        <Accordion/>
    )
}


export default {
    title: 'Example/Accordion',
    //component: ControlledAccordion,
    tags: ['autodocs'],

}

