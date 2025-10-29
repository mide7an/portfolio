$(function () {

    $.ajax({
        url: './data/sam2.json',
        dataType: 'json',
        success: function (data) {
            var useData = data.sam2; //모든제픔에 대한 정보

            function dataPrint(arr) {

                var txt = '<ul class="list">';

                for (var i in arr) {

                    var $Type = arr[i].Type;
                    var $Type2 = arr[i].Type2;
                    var $Name = arr[i].Name;
                    var $Date = arr[i].Date;
                    var $Place = arr[i].Place;
                    var $Target = arr[i].Target;
                    var $Price = arr[i].Price;
                    var $Accept = arr[i].Accept;
                    var $Image = arr[i].Image;

                    txt += '<li>';
                    txt += '<span class="on" style="background:' + $Type2 + '">' + $Type + '</span>';
                    txt += '<div class="imgs">';
                    txt += '<img src="' + $Image + '" alt="공연이미지1"></div>';
                    txt += '<div class="infor">';
                    txt += '<dl>';
                    txt += '<dt>' + $Name + '</dt>';
                    txt += '<dd><span>일시</span>' + $Date + '</dd>';
                    txt += '<dd><span>장소</span>' + $Place + '</dd>';
                    txt += '<dd><span>대상</span>' + $Target + '</dd>';
                    txt += '<dd><span>참가비</span>' + $Price + '</dd>';
                    txt += '<dd><span>접수방법</span>' + $Accept + '</dd>';
                    txt += '</dl>';
                    txt += '</div>';
                    txt += '</li>';
                }

                txt += '</ul>';

                $('.poster_list').html(txt);

            };


            //초기실행, 함수호출
            dataPrint(useData);


            $('#btn').click(function () { //검색버튼을 클릭하면
                /*
                   var 객체배열 = 객체배열.filter(function(element){
                         return 조건절;  //조건에 만족하면 리턴
                       
                   });
                */
                var newArray = useData.filter(function (element) {


                    //return element.Price >= $('#title').val()
                    return element.Name.includes($('#title').val()); //전체배열의 제품명중 검색어의 문자를 포함하고 있으면 리턴
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력
            });

            $('.btn_all').click(function () {  //모두보기
                dataPrint(useData);
            });





            // 제이슨파일에 품목-type 설정후  진행중 완료 버튼 두개 만들어서

            $('.s1').click(function () { //진행중
                var newArray = useData.filter(function (element) {


                    //return element.Price >= $('#title').val()
                    return element.Type == '진행중' //전체배열의 type에 진행중이면
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력

            })
            $('.s2').click(function () { //완료
                var newArray = useData.filter(function (element) {


                    //return element.Price >= $('#title').val()
                    return element.Type == '완료'; //전체배열의 type에 완료이면
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력

            })
        }
    });

});