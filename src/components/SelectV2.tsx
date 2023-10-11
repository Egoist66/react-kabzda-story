import {FC, useState, KeyboardEvent, useEffect} from "react";
import styles from '../stories/styles/selectv2.module.scss'

export type ItemType = {
    title: string
    value: string
}

type SelectTypeProps = {
    value?: string
    items: ItemType[]
    active?: boolean
}

export const SelectV2: FC<SelectTypeProps> = ({items, active = false, value}) => {

    const [isActive, setActive] = useState<boolean>(active)
    const [optionValue, setOptionValue] = useState<string>('')

    const selectedItem = items.find(i => i.value === optionValue)

    const toggleSelect = () => {
        setActive(isActive => !isActive)
    }
    const setOptionValues = (value: string) => {
        return () => {
            setOptionValue(value)
            setActive(false)
        }
    }

    const setOnHoverOptionValues = (value: string) => {
        return () => {
            setOptionValue(value)
        }
    }

    const setOptionsOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === selectedItem?.value) {
                    if (items[i - 1]) {
                        setOptionValue(items[i - 1]?.value)
                        break
                    }

                }

            }
        } else if(e.key === 'ArrowDown') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === selectedItem?.value) {

                    if(items[i + 1]){
                        setOptionValue(items[i + 1].value)
                        break
                    }

                }


            }
        }


    }

    const removeSelectByEscape = () => {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' || e.key === 'Enter'){
                setActive(false)
            }
        })
    }

    useEffect(() => {
        if(isActive){
            removeSelectByEscape()

        }

        return () => {

        }
    }, [isActive])

    useEffect(() => {
        setOptionValue(value ? value : '')
    }, [value])

    return (
        <div tabIndex={0} onKeyDown={setOptionsOnKeyDown} className={styles.select}>

            <span
                className={styles.spanTrigger}
                onClick={toggleSelect}>{selectedItem && selectedItem?.title}
            </span>

            {isActive &&
                <div className={styles.options}>
                    {items ? items.map(i => (
                        <div className={selectedItem === i ? styles.selectedItem : ''}
                             onMouseEnter={setOnHoverOptionValues(i.value)}
                             onClick={setOptionValues(i.value)} key={i.value}>{i.title}</div>)
                    ) : 'No data'}
                </div>}
        </div>
    )
}