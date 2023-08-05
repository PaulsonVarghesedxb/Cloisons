import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Demo({ itemsData }) {
    const items = itemsData;
    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    return (
        <ScrollMenu transitionDuration={500} LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id, src, txt }) => (
                <Card
                    itemId={id} // NOTE: itemId is required for track items
                    title={id}
                    key={id}
                    onClick={handleClick(id)}
                    selected={isItemSelected(id)}
                    data={src}
                    txt={txt}
                />
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <FiArrowLeft size={40} color="#2196F3" className="mb-1 mx-2" />
        </div>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <FiArrowRight size={40} color="#2196F3" className="mb-1 mx-2" />
        </div>
    );
}

function Card({ onClick, selected, title, itemId, data, txt }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '300px',
                margin: '0 100px'
            }}
            tabIndex={0}
        >
            <div>
                <div className='txtHead'>{txt}</div>
            </div>
            <img src={data} width={'100%'} height={'100%'} alt="loading.." />
        </div >
    );
}

export default Demo;