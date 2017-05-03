# flex

## React에서

                const styles = StyleSheet.create({
                    Acom : {
                        width: 100,
                        height: 100,
                        flex : 1,
                        backgroundColor :'skyblue'
                    },
                    Bcom : {
                        width: 100,
                        height: 100,
                        flex : 2,
                        backgroundColor :'red'
                    },
                    Ccom : {
                        width: 100,
                        height: 100,
                        flex : 3,
                        backgroundColor :'blue'
                    }

                });

                <View style={{flex : 1}}>
                    <View style={styles.Acom} />
                    <View style={styles.Bcom} />
                    <View style={styles.Ccom} />
                </View>

전체 flex값이 1일때 각각의 컴포넌트들은 가로로 1:2:3의 비율로 나눠 가진다.

## flexDirection

                flexDirection: 'row'
                option : row, column

flex에서는 Default값은 column이다.

## justifyContent

                justifyContent: 'space-between'
                option : flex-start, center, flex-end, space-around, and space-between.

컴포넌트들을 좌우위아래 알맞은 크기로 끝까지 펼쳐놓는다.(늘이기X)

## Align Items

                alignItems: 'center'

아이템들의 정렬을 책임진다.
