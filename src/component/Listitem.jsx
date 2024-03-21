function Listitem(props) {
    return (
        <div class="Listitem">
            <input type="checkbox"></input>

            <label> {props.name} </label>
        </div>
    );
}

export default Listitem;
