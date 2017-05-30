# Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users. You only need to check that the ids match.


## Solution

                function checkUsersValid(goodUsers) {
                      return function allUsersValid(submittedUsers) {
                          return submittedUsers.every(function (submittedUser) { //모든 유저들은
                            return goodUsers.some(function (goodUser) { 적어도 goodUser들중
                                return goodUser.id == submittedUser.id //같은 아이디를 가진 애들만
                            })
                          })
                      };
                    }

                    module.exports = checkUsersValid
