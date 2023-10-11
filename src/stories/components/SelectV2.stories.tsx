import {FC} from "react";
import {ItemType, SelectV2} from "../../components/SelectV2";

export const CutomSelectV2: FC = () => {

    const items: ItemType[] = [
        {title: 'Moscow', value: '0'},
        {title: 'Kiev', value: '1'},
        {title: 'Minsk', value: '2'},


    ]


    return (
        <>

            <SelectV2 active={false} value={'0'} items={items}/>


        </>
    )
}


export default {
    title: 'Example/SelectV2',
    parameters: {},
    tags: ['autodocs'],
}
