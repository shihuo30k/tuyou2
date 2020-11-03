import React from 'react'

import { SwipeAction, List } from 'antd-mobile';

import {
    Container
} from '../StyledMine'

export default function myList2 (){
    return (
        <Container>
        <div>
          <List className="myList2">
            <SwipeAction className="List3">
            <svg t="1603935391256" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28070" width="200" height="200"><path d="M64.437073 215.989073v592.021854h895.125854V215.989073h-895.125854z m841.578147 54.04722L512.099902 512.199805 118.584195 270.036293h787.431025z m0 484.327024H118.584195V333.174634L512.099902 575.438049l393.915318-242.263415v421.188683z" p-id="28071"></path></svg>
            <List.Item
                className="List1-3"
                arrow="horizontal"
            >
                我发的帖子
            </List.Item>
            </SwipeAction>



            <SwipeAction className="List4">
            <svg t="1603935437133" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28835" width="200" height="200"><path d="M512 987.428571a475.428571 475.428571 0 1 0 0-950.857142 475.428571 475.428571 0 0 0 0 950.857142z m-5.705143-304.786285a51.638857 51.638857 0 0 0-39.789714 17.115428 51.638857 51.638857 0 0 0-17.115429 39.789715c0 17.042286 5.705143 28.452571 17.115429 39.862857a51.638857 51.638857 0 0 0 39.789714 17.042285 51.638857 51.638857 0 0 0 39.862857-17.042285 51.638857 51.638857 0 0 0 17.042286-39.862857 51.638857 51.638857 0 0 0-17.042286-39.789715 51.638857 51.638857 0 0 0-39.862857-17.115428z m17.115429-466.432c-56.905143 0-102.4 17.042286-136.557715 51.2-39.862857 34.084571-56.905143 79.579429-56.905142 136.484571h85.357714c0-34.084571 5.705143-62.537143 22.674286-79.652571 17.115429-22.674286 39.862857-34.084571 79.725714-34.084572 28.452571 0 51.2 5.632 68.242286 22.674286 17.042286 17.115429 22.747429 39.862857 22.747428 62.610286 0 22.747429-5.705143 39.862857-22.674286 56.905143l-17.115428 17.042285c-45.494857 45.568-79.725714 79.725714-91.062857 102.4-11.337143 17.115429-11.337143 45.568-11.337143 74.020572v11.337143h85.284571v-11.337143c0-17.115429 5.705143-34.157714 11.410286-51.2 5.705143-17.115429 17.042286-28.525714 34.157714-39.862857 39.789714-34.157714 62.537143-51.2 68.242286-62.537143 22.747429-22.820571 28.452571-56.905143 28.452571-96.768 0-45.494857-17.042286-85.284571-45.494857-113.737143-34.157714-34.157714-73.947429-45.494857-125.147428-45.494857zM512 914.285714a402.285714 402.285714 0 1 1 0-804.571428 402.285714 402.285714 0 0 1 0 804.571428z" p-id="28836"></path></svg>
            <List.Item
                className="List1-4"
                arrow="horizontal"
            >
                我的问答
            </List.Item>
            </SwipeAction>




            <SwipeAction className="List5">
            <svg t="1603935695865" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32723" width="200" height="200"><path d="M512.426971 0a511.999086 511.999086 0 1 0 272.82237 945.004027 42.057068 42.057068 0 0 0 27.794236 10.605695A42.788495 42.788495 0 1 0 768.426514 914.284082a39.862786 39.862786 0 0 0 0 6.217131 482.741995 482.741995 0 1 1 146.285453-146.285453l21.211391 21.211391A511.999086 511.999086 0 0 0 512.426971 0z" p-id="32724"></path><path d="M371.261509 782.627174a90.331267 90.331267 0 0 1-90.331267-90.331267v-62.902745a90.331267 90.331267 0 0 1 61.074177-85.211277 209.919625 209.919625 0 0 1-29.622805-103.131244 146.285453 146.285453 0 0 1 137.508326-153.234012 125.80549 125.80549 0 0 1 22.308532 4.754277 138.605467 138.605467 0 0 1 102.765531-51.199908 146.285453 146.285453 0 0 1 137.508325 153.234012 164.571135 164.571135 0 0 1-31.451372 97.279826 102.765531 102.765531 0 0 1 62.902745 90.696981v62.537031a90.331267 90.331267 0 0 1-90.331267 90.331267h-44.617064a95.816972 95.816972 0 0 1-80.822712 47.177059zM366.141518 565.393276a75.337008 75.337008 0 0 0-62.171317 73.142727v47.177058a77.53129 77.53129 0 0 0 80.456999 73.142727H512.426971a77.53129 77.53129 0 0 0 80.457-73.142727v-48.274199a75.337008 75.337008 0 0 0-62.171318-73.142727 137.87404 137.87404 0 0 1-82.651281 29.257091 126.902631 126.902631 0 0 1-79.725572-28.525664H366.141518z m288.182343-46.811345a127.999771 127.999771 0 0 1-76.068436 29.988518 115.931222 115.931222 0 0 1 40.2285 82.285567v62.537032a92.525549 92.525549 0 0 1 0 14.994258l21.942818 4.388564a77.53129 77.53129 0 0 0 80.822713-73.142726v-49.371341a75.337008 75.337008 0 0 0-62.171318-73.142726h-2.194282z m-204.433921-206.262489a122.148353 122.148353 0 0 0-113.371226 129.096913 122.148353 122.148353 0 0 0 113.371226 129.096912 122.148353 122.148353 0 0 0 113.371226-129.096912 122.148353 122.148353 0 0 0-113.371226-129.096913z m125.439776-47.177058a103.496958 103.496958 0 0 0-73.142726 29.988518 169.325412 169.325412 0 0 1 83.382708 146.285453 166.765416 166.765416 0 0 1-18.285682 76.434149v4.754277h4.388564a122.514067 122.514067 0 0 0 114.834081-128.731199 122.148353 122.148353 0 0 0-111.542658-128.365485z" p-id="32725"></path><path d="M371.261509 782.627174a90.331267 90.331267 0 0 1-90.331267-90.331267v-62.902745a90.331267 90.331267 0 0 1 61.074177-85.211277 209.919625 209.919625 0 0 1-29.622805-103.131244 146.285453 146.285453 0 0 1 137.508326-153.234012 125.80549 125.80549 0 0 1 22.308532 4.754277 138.605467 138.605467 0 0 1 102.765531-51.199908 146.285453 146.285453 0 0 1 137.508325 153.234012 164.571135 164.571135 0 0 1-31.451372 97.279826 102.765531 102.765531 0 0 1 62.902745 90.696981v62.537031a90.331267 90.331267 0 0 1-90.331267 90.331267h-44.617064a95.816972 95.816972 0 0 1-80.822712 47.177059zM366.141518 565.393276a75.337008 75.337008 0 0 0-62.171317 73.142727v47.177058a77.53129 77.53129 0 0 0 80.456999 73.142727H512.426971a77.53129 77.53129 0 0 0 80.457-73.142727v-48.274199a75.337008 75.337008 0 0 0-62.171318-73.142727 137.87404 137.87404 0 0 1-82.651281 29.257091 126.902631 126.902631 0 0 1-79.725572-28.525664H366.141518z m288.182343-46.811345a127.999771 127.999771 0 0 1-76.068436 29.988518 115.931222 115.931222 0 0 1 40.2285 82.285567v62.537032a92.525549 92.525549 0 0 1 0 14.994258l21.942818 4.388564a77.53129 77.53129 0 0 0 80.822713-73.142726v-49.371341a75.337008 75.337008 0 0 0-62.171318-73.142726h-2.194282z m-204.433921-206.262489a122.148353 122.148353 0 0 0-113.371226 129.096913 122.148353 122.148353 0 0 0 113.371226 129.096912 122.148353 122.148353 0 0 0 113.371226-129.096912 122.148353 122.148353 0 0 0-113.371226-129.096913z m125.439776-47.177058a103.496958 103.496958 0 0 0-73.142726 29.988518 169.325412 169.325412 0 0 1 83.382708 146.285453 166.765416 166.765416 0 0 1-18.285682 76.434149v4.754277h4.388564a122.514067 122.514067 0 0 0 114.834081-128.731199 122.148353 122.148353 0 0 0-111.542658-128.365485z" p-id="32726"></path></svg>
            <List.Item
                className="List1-5"
                arrow="horizontal"
            >
                我的结伴
            </List.Item>
            </SwipeAction>



            <SwipeAction className="List6">
            <svg t="1603935746141" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33491" width="200" height="200"><path d="M177.120053 299.828464c14.788226 0 27.092934 15.917098 31.72131 22.803219 13.659354 20.206813 21.448572 48.993055 21.448572 79.133944 0 30.140889-7.789218 59.040018-21.448572 79.133943-4.628376 6.886121-16.933083 22.803219-31.72131 22.803219s-27.092934-15.917098-31.72131-22.803219c-13.659354-20.206813-21.448572-48.993055-21.448572-79.133943 0-30.140889 7.789218-59.040018 21.448572-79.133944 4.628376-6.886121 16.933083-22.803219 31.72131-22.803219m0-48.089957c-55.879175 0-101.146952 67.167898-101.146952 149.914232 0 82.859222 45.267776 149.914232 101.146952 149.914233s101.146952-67.167898 101.146952-149.914233c0-82.746334-45.267776-149.914232-101.146952-149.914232zM379.526844 117.289825c14.788226 0 27.092934 15.917098 31.721309 22.803219 13.659354 20.206813 21.448572 48.993055 21.448573 79.133943 0 30.140889-7.789218 59.040018-21.448573 79.133943-4.628376 6.886121-16.933083 22.803219-31.721309 22.803219-14.788226 0-27.092934-15.917098-31.72131-22.803219-13.659354-20.206813-21.448572-48.993055-21.448572-79.133943 0-30.140889 7.789218-59.040018 21.448572-79.133943 4.515489-6.886121 16.933083-22.803219 31.72131-22.803219m0-48.089957c-55.879175 0-101.146952 67.167898-101.146952 149.914232 0 82.859222 45.267776 149.914232 101.146952 149.914232s101.146952-67.167898 101.146952-149.914232c0-82.746334-45.267776-149.914232-101.146952-149.914232zM505.960534 482.367104c4.628376 0.112887 58.13692 2.596406 92.003086 37.591445 13.772241 14.22379 25.851174 36.236799 38.607431 59.717341 26.867159 49.105942 60.281777 110.17793 131.965163 134.787344 23.028993 7.902106 39.962077 23.141881 51.928123 46.509536 10.837173 21.335685 16.933083 48.880168 16.933083 77.553523 0 19.190828-6.999008 34.769265-20.771249 46.283761-17.949068 15.014001-46.73531 23.028993-82.972109 23.028994-50.121927 0-89.745342-10.837173-128.014111-21.222798-33.527505-9.143865-65.248815-17.836181-99.679417-17.836182-34.317716 0-66.039025 8.692316-99.679418 17.836182-38.268769 10.498512-77.892184 21.222798-128.014111 21.222798-36.349686 0-65.02304-8.014993-83.084996-23.028994-13.772241-11.514497-20.771249-27.092934-20.771249-46.283761 0-28.673355 5.983023-56.217837 16.933083-77.553523 11.966046-23.367655 28.899129-38.60743 51.928123-46.509536 71.796274-24.609415 105.098005-85.794289 131.965163-134.787344 12.756256-23.367655 24.835189-45.493551 38.607431-59.717341 33.979054-34.995039 87.487598-37.478558 92.115974-37.591445m0-47.97707s-75.860214 0-126.43369 52.153897-66.942123 153.413736-151.720428 182.53864c-75.973101 26.076949-101.259839 104.307794-101.259839 169.556609 0 65.248815 50.573476 117.289825 151.833315 117.289825 101.146952 0 164.476684-39.058979 227.693529-39.05898s126.43369 39.058979 227.693529 39.05898c101.146952 0 151.720428-52.153897 151.720427-117.289825 0-65.248815-25.286738-143.47966-101.146951-169.556609-84.891192-29.124904-101.146952-130.384743-151.833315-182.53864-50.686363-52.153897-126.546577-52.153897-126.546577-52.153897zM834.801014 299.828464c14.788226 0 27.092934 15.917098 31.72131 22.803219 13.659354 20.206813 21.448572 48.993055 21.448572 79.133944 0 30.140889-7.789218 59.040018-21.448572 79.133943-4.628376 6.886121-16.933083 22.803219-31.72131 22.803219s-27.092934-15.917098-31.721309-22.803219c-13.659354-20.206813-21.448572-48.993055-21.448573-79.133943 0-30.140889 7.789218-59.040018 21.448573-79.133944 4.515489-6.886121 16.933083-22.803219 31.721309-22.803219m0-48.089957c-55.879175 0-101.146952 67.167898-101.146952 149.914232 0 82.859222 45.267776 149.914232 101.146952 149.914233s101.146952-67.167898 101.146952-149.914233c0-82.746334-45.267776-149.914232-101.146952-149.914232zM632.394223 117.289825c14.788226 0 27.092934 15.917098 31.72131 22.803219 13.659354 20.206813 21.448572 48.993055 21.448572 79.133943 0 30.140889-7.789218 59.040018-21.448572 79.133943-4.628376 6.886121-16.933083 22.803219-31.72131 22.803219-14.788226 0-27.092934-15.917098-31.721309-22.803219-13.659354-20.206813-21.448572-48.993055-21.448573-79.133943 0-30.140889 7.789218-59.040018 21.448573-79.133943 4.628376-6.886121 16.933083-22.803219 31.721309-22.803219m0-48.089957c-55.879175 0-101.146952 67.167898-101.146951 149.914232 0 82.859222 45.267776 149.914232 101.146951 149.914232 55.879175 0 101.146952-67.167898 101.146952-149.914232 0.112887-82.746334-45.267776-149.914232-101.146952-149.914232z" p-id="33492"></path></svg>
            <List.Item
                className="List1-6"
                arrow="horizontal"
            >
                我的足迹
            </List.Item>
            </SwipeAction>



            <SwipeAction className="List7">
            <svg t="1603935553788" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30488" width="200" height="200"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-987.428571a475.428571 475.428571 0 1 0 475.428571 475.428571A475.428571 475.428571 0 0 0 512 36.571429z m137.435429 691.858285l-119.844572 82.212572a47.762286 47.762286 0 0 1-53.76 0l-118.930286-81.554286a266.496 266.496 0 0 1-109.897142-215.771429V358.4a22.418286 22.418286 0 0 1 13.275428-20.297143l216.466286-99.364571q1.243429-0.548571 2.523428-0.987429a76.068571 76.068571 0 0 1 46.884572 0 29.293714 29.293714 0 0 1 2.486857 0.987429l216.576 99.364571a22.454857 22.454857 0 0 1 13.312 20.297143v154.88a265.984 265.984 0 0 1-109.092571 215.149714z m-27.392-287.780571a20.150857 20.150857 0 0 0-28.306286 4.169143l-91.026286 123.574857-91.136-123.574857a19.858286 19.858286 0 0 0-13.238857-7.972572 20.114286 20.114286 0 0 0-15.067429 3.657143 20.370286 20.370286 0 0 0-4.278857 28.416l103.643429 140.544a21.174857 21.174857 0 0 0 40.045714 0l103.643429-140.544a20.406857 20.406857 0 0 0-4.278857-28.269714z" p-id="30489"></path></svg>
            <List.Item
                className="List1-7"
                arrow="horizontal"
            >
                会员中心
            </List.Item>
            </SwipeAction>




            <SwipeAction className="List8">
            <svg t="1603935615945" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31982" width="200" height="200"><path d="M384 832h256v-154.624a320.064 320.064 0 1 0-256 0V832z m0 64H320v-179.392a384 384 0 1 1 384 0V896H384z m-64 64h384v64H320v-64z" p-id="31983"></path></svg>
            <List.Item
                className="List1-8"
                arrow="horizontal"
            >
                旅行实验室
            </List.Item>
            </SwipeAction>



            
        </List>

        </div>
        </Container>
    )
}