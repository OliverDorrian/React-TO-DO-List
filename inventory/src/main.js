

function MainContent(){
    return (
        <div id="main-content">
            <Buttons/>
        </div>
    );
}

function Buttons(){
    return (
        <div id="row-buttons">          
            <div id="row-buttons-left">
                <input type="text" class="search-box" id="search-box"></input>
            </div>
            <div id="row-buttons-right">
                <button type="click" class="button" id="task-create">Add Item</button>
            </div>
        </div>
    );
}

export default MainContent;