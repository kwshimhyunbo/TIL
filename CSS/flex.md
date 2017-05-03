# flex

## React에서

                const styles = StyleSheet.create({
                    Acom : {
                        flex : 1,
                        backgroundColor :'skyblue'
                    },
                    Bcom : {
                        flex : 2,
                        backgroundColor :'red'
                    },
                    Ccom : {
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

flex에서는 Default값은 column이다.
