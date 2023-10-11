import {FC, MouseEvent, ReactElement, ReactNode, useEffect, useId, useState} from "react";

export type RenderType = (setValue?: () => void) => ReactNode | ReactElement
type SelectProps = {
    render?: RenderType
    list?: Array<{ name: string, id: string }>
    value?: string
    onChangeValue?: (value: string, id: string) => void
    initSelect?: () => void
    isActive?: boolean

}


type SelectState = {
    value: string
    isActive: boolean
    id: string
}

export const Select: FC<SelectProps> = ({render, list}) => {

    const [state, setState] = useState<SelectState>({
        value: '',
        id: '',
        isActive: false
    })

    const closeSelectByEscp = () => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setState({
                    ...state,
                    isActive: false
                })
            }
        })
    }

    const onChangeValue = (value: string, id: string) => {
        setState({
            ...state,
            value: value,
            id: id
        })
    }

    const closeAfterSelction = () => {
        if (state.value) {
            setState({
                ...state,
                isActive: false
            })
        }
    }

    const toggleSelect = () => {
        setState({
            ...state,
            isActive: !state.isActive
        })
    }

    useEffect(() => {
        closeSelectByEscp()
    }, [state.isActive])

    useEffect(() => {
        if (state.value) {
            closeAfterSelction()
        }
    }, [state.value])

    return (

        <>


            <pre style={{fontSize: 16}}>
                State - {JSON.stringify(state, null, 2)}
            </pre>

            <div id={'select'}>
                <Selectable
                    initSelect={toggleSelect}
                    value={state.value}
                />


                <SelectBody
                    isActive={state.isActive}
                    render={render}
                    list={list}
                    onChangeValue={onChangeValue}
                />
                

            </div>


        </>

    )
}


const Selectable: FC<SelectProps> = ({value, initSelect}) => {

    return (
        <div onClick={initSelect}>{value || 'Выбрать из списка'}</div>
    )
}

const SelectBody: FC<SelectProps> = ({onChangeValue, isActive, render, list}) => {

    const setValue = (e?: MouseEvent<HTMLDivElement>) => {
        if (e?.currentTarget.textContent) {
            if (onChangeValue) {
                onChangeValue(e.currentTarget.textContent, e.currentTarget?.id)

            }
        }

    }

    return (
        <div className={isActive ? 'open' : ''} id={'select-body'}>
            {render ? render(setValue) : (
                <>

                    {list ? list.map(l => (
                        <div
                            id={l.id}
                            key={l.id}
                            onClick={setValue}
                            className={'options'}>{l.name}
                        </div>
                    )) : null}


                </>
            )}

        </div>
    )
}