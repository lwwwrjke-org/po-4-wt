const ReposViewSwitcher = () => {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-success active">
                <input type="radio" name="line-by-line"/>
                Lines
            </label>
            <label className="btn btn-success">
                <input type="radio" name="table"/>
                Table
            </label>
        </div>
    )
}

export default ReposViewSwitcher