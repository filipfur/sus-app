import './MerchWidget.css'

function WidgetItem()
{
    return (<div className='item'>
        <img src="./discord-logo-black.png"></img>
        <span className='item-price'>0.0 SEK</span>
    </div>)
}

export function MerchWidget()
{
    return (<div className="widget">
        <div className='item-container'>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
            <WidgetItem/>
        </div>
        <div className="footer">
            <span>Cost: 0.0 SEK</span>
        </div>
    </div>)
}