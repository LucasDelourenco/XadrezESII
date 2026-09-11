const Casa = ({row, col}) => {
    return (
        <>
            <div className={`casa ${(row + col) % 2 === 0 ? 'casa-branca' : 'casa-preta'}`} 
                data-row={`${row}`} 
                data-col={`${col}`} >
            </div>
        </>
    )
}
export default Casa