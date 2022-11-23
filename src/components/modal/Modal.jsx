import "./Modal.css"

export default function Modal({onClose, show, summary, title, children }) {

    if ((!show)||(summary===0)) { return null;}

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={ e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>{title}</h4>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    {/* <button onClick={onClose}>Close</button> */}
                    ⚜✼✼⚜
                </div>
            </div>
        </div>
    );
}