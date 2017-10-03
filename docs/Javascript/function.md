# function list

## map
                array.map(function(currentValue, index, arr), thisValue)

첫번째는 array의 첫번째 값, 두번째는 인덱스다.
currentValue	[Required].
    The value of the current element
index	[Optional].
    The array index of the current element
arr	[Optional].
    The array object the current element belongs to

    Example:
                render() {
                    return(
                        <div>
                            <ul>
                                {this.state.ContactsInfo.map((Obj, index) => {
                                    return (
                                        <ContactsInfo name = {Obj.name} number = {Obj.number} key = {index} />
                                    );
                                })}
                            </ul>
                        </div>
                    );
                }
