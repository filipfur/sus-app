import './MerchWidget.css'

import { GiLockedChest } from 'react-icons/gi'

function WidgetItem({children, src})
{
    return (<div className='item'>
        {children}
        <span className='item-price'>0.0 SEK</span>
    </div>)
}

export function MerchWidget()
{
            /*<WidgetItem><img style={{width: "8em", height: "8em"}} src={"./sus-logo.png"}/></WidgetItem>*/
            return (<div className="widget">
        <div className='item-container'>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
            <WidgetItem><GiLockedChest style={{width: "4em", height: "4em"}}/></WidgetItem>
        </div>
        <div className="footer">
            <span>Cost: 0.0 SEK</span>
        </div>
    </div>)
}