import React, {useState, useEffect} from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { v4 } from 'uuid';
export function PhoneFilter () {
    const [tab, setTab] = useState(-1)
    const [filter, setFilter] = useState([
        {name: 'Hãng', option: ['iPhone', 'Samsung', 'Oppo', 'Vivo o', 'Xiaomi', 'Mixiao']},
        {name: 'RAM', option: ['1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB']},
        {name: 'Giá', option: ['Dưới 2 triệu', 'Từ 2 - 4 triệu', 'Từ 4 - 7 triệu', 'Từ 7 - 13 triệu', 'Từ 13 - 20 triệu', 'Trên 20 triệu', 'Trên  40 triệu', 'Trên 100 triệu', 'Trên 1 tỏi']},
    ])
    const handleClick = (e, index) => {
        if (tab ===  index) {
            setTab(-1)
        }
        else { setTab(index); }
    }

    // useEffect to detect a click outside of the element
    useEffect(() => {
        if (tab === -1) return
        const func = (e) => {
            if (!document.getElementById(`filter-popup-${tab}`).contains(e.target) && !document.getElementById(`filter-item-${tab}`).contains(e.target)) setTab(-1)
        }
        document.addEventListener('mousedown', func)
        return () => document.removeEventListener('mousedown', func)
    }, [tab])
    return (
        <div id='filter' style={{padding: '10px', display: 'flex'}}>
            {
                filter && filter.map(
                    (element, index) => 
                    <div key={index} style={{position: 'relative'}}>
                        <div id={`filter-item-${index}`} className='filter-item' style={{border: tab === index ?'1px solid deepskyblue' : ''}} onClick={(e) => handleClick(e, index)}>
                            {element.name}&nbsp;<AiFillCaretDown style={{margin: 'auto'}}/>
                            
                        </div>
                        <div id={`filter-popup-${index}`} className='filter-popup' style={{display: tab === index ? '' : 'none'}}>
                            <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', maxWidth: '100vw'}}>
                                {
                                    element.option.map(
                                        (option, indexx) => 
                                        <div className='filter-item' key={`${index}${indexx}`}  style={{marginBottom: '10px', whiteSpace: 'nowrap'}}>
                                            {option}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}