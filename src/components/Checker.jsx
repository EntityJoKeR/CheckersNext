'use client'

import { useState } from "react";

const Checker = ({color, queen}) => {
    const [checkerColor, setColor] = useState(color)
    const [queenValue, setQueen] = useState(queen)
    const blackStyles = 'w-[70px] h-[70px] rounded-full bg-black pointer-events-auto flex items-center justify-center'
    const whiteStyles = 'w-[70px] h-[70px] rounded-full bg-yellow-50 pointer-events-auto flex items-center justify-center'
    let componentStyles = checkerColor==='black'? blackStyles : whiteStyles


    function clickChecker(event) {
        if (checkerColor==='white'){
            setColor('black')
        } else{
            setColor('white')
        }
        if (queenValue){
            setQueen(false)
        } else{
            setQueen(true)
        }
    }

    function isQueen(queenValue){
    if (queenValue){
        return <svg width="45" height="33" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7457 0.260088C14.4527 0.700735 14.2277 1.2117 14.1176 1.68047C14.0847 1.82579 14.073 1.95939 14.073 2.26644C14.073 2.62974 14.0871 2.74459 14.148 2.90163C14.1551 2.92272 14.0965 2.89928 14.0051 2.84303C13.766 2.69537 13.4613 2.5477 13.241 2.47504C13.0605 2.4141 13.0113 2.40707 12.737 2.40707C12.4722 2.40707 12.4136 2.4141 12.2917 2.46332C12.1042 2.53833 11.9049 2.73521 11.8464 2.90866C11.6917 3.37509 11.98 4.08294 12.4089 4.28451C12.6128 4.38061 12.7933 4.34076 12.9644 4.16263L13.0511 4.07122L12.9925 3.94934C12.9198 3.80402 12.9292 3.73136 13.0323 3.63526C13.1284 3.54619 13.262 3.51338 13.4871 3.5251C13.698 3.53681 13.8293 3.59072 13.9441 3.7126C14.0238 3.79464 14.0496 3.8673 14.0285 3.94699C14.0097 4.02903 13.8715 4.24701 13.6628 4.52827C13.3488 4.95485 13.3019 5.08377 13.4167 5.19627C13.4636 5.24549 13.4964 5.25487 13.6089 5.25487C13.8879 5.25487 14.1668 5.1494 14.3566 4.96892L14.4762 4.85641L14.5418 5.02751L14.6098 5.19627L14.5324 5.58067C14.0754 7.84719 13.2808 9.38242 12.3222 9.85354C12.0198 10.0012 11.9214 10.0246 11.6237 10.0246C11.3776 10.0223 11.333 10.0153 11.1151 9.94026C10.665 9.78322 10.283 9.51836 9.79547 9.03084C9.61968 8.85505 9.39935 8.61129 9.30091 8.48941C8.99855 8.1097 9.01965 8.15189 9.03606 7.94329C9.04777 7.82375 9.06184 7.76515 9.07825 7.77218C9.34545 7.89172 9.38998 7.90344 9.59624 7.90344C10.1447 7.90344 10.3369 7.67843 10.0181 7.40654C9.99235 7.3831 9.82594 7.26356 9.6478 7.13934C9.16497 6.79948 9.09231 6.70338 9.172 6.51118C9.31498 6.16663 9.89157 5.95803 10.1072 6.17367C10.1728 6.23695 10.1752 6.24867 10.1611 6.37993C10.1447 6.51118 10.147 6.51821 10.2103 6.5604C10.3158 6.63306 10.4002 6.66119 10.5033 6.66119C10.869 6.66119 11.1338 6.19945 11.1033 5.62286C11.0776 5.1658 10.8807 4.88923 10.5127 4.79313C10.2361 4.72047 9.87282 4.80719 9.55171 5.02048C9.36654 5.14471 9.03137 5.46582 8.8462 5.69552L8.72901 5.84084L8.71026 5.68614C8.61416 4.84235 8.04929 4.00793 7.09533 3.30008L7.00861 3.2368L6.96173 3.39853C6.80938 3.90715 6.74844 4.3056 6.74844 4.77906C6.7461 5.3955 6.87267 5.88537 7.12112 6.24867C7.16331 6.30727 7.18909 6.35649 7.18206 6.35649C7.17503 6.35649 7.03439 6.32836 6.87032 6.2932C6.48593 6.21351 5.99606 6.20414 5.77574 6.26976C5.21555 6.44321 4.92491 6.82057 5.01398 7.26122C5.1218 7.79562 5.74292 8.31362 6.14372 8.20814C6.27029 8.17298 6.4203 8.02298 6.46483 7.88469L6.49999 7.7839L6.41327 7.70421C6.27498 7.57764 6.27264 7.47451 6.40155 7.32685C6.61953 7.0784 7.13987 7.02683 7.33441 7.23544C7.38129 7.287 7.38597 7.3081 7.37425 7.43935C7.36722 7.52139 7.30159 7.77453 7.23128 8.00423C7.07893 8.48706 7.06486 8.62066 7.15862 8.71207C7.23597 8.79177 7.32034 8.78708 7.51957 8.68629C7.73052 8.58082 7.911 8.41675 8.01413 8.23392C8.05866 8.15658 8.10085 8.09329 8.10788 8.09329C8.11492 8.09329 8.16179 8.14251 8.21101 8.20345L8.30243 8.31362L8.28836 8.73551C8.23445 10.2051 7.92272 11.2856 7.42582 11.7333C7.2594 11.8833 7.16331 11.9279 6.84688 12.0076C6.47186 12.1036 6.18826 12.1318 5.94684 12.099C5.71714 12.0685 5.40775 11.9677 5.18508 11.8552C4.76319 11.6419 3.95924 11.0677 3.95924 10.9809C3.95924 10.9669 4.04362 10.9505 4.14675 10.9458C4.30144 10.9364 4.36238 10.92 4.51005 10.8473C4.60849 10.7981 4.74678 10.7044 4.82178 10.6364C4.94132 10.5215 4.95538 10.5028 4.95538 10.4137C4.95538 10.2356 4.86397 10.1981 4.28738 10.1278C3.71548 10.0598 3.57953 10.0176 3.55141 9.90979C3.49515 9.70353 3.57953 9.43398 3.75532 9.25585C4.02487 8.98396 4.28269 8.98162 4.3577 9.25351L4.38817 9.36132L4.56864 9.35195C4.721 9.34726 4.76084 9.33554 4.83116 9.28163C5.16399 9.0285 5.06789 8.29018 4.65068 7.86594C4.3952 7.60811 4.08815 7.54952 3.78111 7.70187C3.3428 7.92219 3.06857 8.36284 2.89278 9.12928L2.8295 9.40351L2.71699 9.24648C2.34666 8.72145 1.71381 8.3394 0.865335 8.12845C0.612197 8.06751 0.194989 7.99719 0.0684198 7.99719C0.00279155 7.99719 -0.00189619 8.00188 0.000447677 8.08392C0.00279154 8.16595 0.0238863 8.19174 0.309838 8.45894C0.48094 8.61598 0.778612 8.87849 0.970809 9.0449C1.16535 9.20897 1.50287 9.49727 1.72085 9.68478C2.17321 10.0692 2.76152 10.6387 3.2303 11.1403C3.47172 11.3981 3.62641 11.5927 3.86548 11.9419C4.6413 13.074 4.93663 13.6295 5.09367 14.2436C5.15227 14.4756 5.2179 14.9069 5.22962 15.1343L5.23665 15.2515L9.58452 15.2655C11.9753 15.2726 16.3606 15.2819 19.3303 15.2843L24.7259 15.2866V15.1483C24.7259 14.403 25.5252 12.8045 26.6643 11.2763C26.9526 10.8872 27.6018 10.2426 28.3237 9.62618C28.5956 9.39648 28.9331 9.10584 29.0738 8.98631C29.2168 8.86442 29.4816 8.62769 29.6644 8.45659C29.9809 8.16595 29.9996 8.14486 29.9996 8.06048C29.9996 8.0136 29.9902 7.97376 29.9785 7.97376C29.9644 7.97376 29.8308 7.99016 29.6785 8.00891C29.0081 8.09564 28.3566 8.32534 27.8737 8.64645C27.6792 8.77301 27.3885 9.05897 27.2737 9.23241C27.1612 9.40586 27.1729 9.41992 27.0815 9.0285C26.9198 8.33237 26.6362 7.88703 26.233 7.6878C26.0924 7.61983 26.0525 7.61046 25.8861 7.61046C25.6869 7.61046 25.5861 7.64796 25.4103 7.78156C25.1712 7.96438 24.9626 8.43081 24.9603 8.78708C24.9603 9.11053 25.1736 9.35664 25.4525 9.35664C25.572 9.35664 25.6095 9.33085 25.6377 9.23476C25.6775 9.10584 25.7595 9.0285 25.8556 9.0285C26.0385 9.03084 26.2752 9.21366 26.39 9.44102C26.4533 9.56993 26.4791 9.79963 26.4393 9.90041C26.4041 9.99183 26.2189 10.0504 25.8228 10.095C25.3025 10.1536 25.1712 10.1864 25.0939 10.2731C25.0048 10.3715 25.0212 10.4583 25.1548 10.5942C25.3587 10.8028 25.6213 10.9247 25.8861 10.9317C25.9705 10.9341 26.0385 10.9411 26.0385 10.9458C26.0385 10.9528 26.0268 10.9973 26.0103 11.0466C25.9892 11.1169 25.9377 11.1778 25.783 11.3091C25.2978 11.7216 24.9697 11.949 24.6251 12.1107C24.304 12.263 24.0673 12.3169 23.7415 12.3169C23.4204 12.3146 23.1977 12.263 22.9 12.1201C22.7313 12.038 22.6633 11.9865 22.4875 11.8083C22.3094 11.6278 22.2555 11.5552 22.143 11.3372C21.8265 10.7184 21.6883 10.0082 21.6179 8.63707L21.6015 8.32768L21.7023 8.20814C21.8008 8.0886 21.8429 8.06517 21.8429 8.12376C21.8429 8.14017 21.8875 8.22221 21.9414 8.3019C22.0492 8.46362 22.2484 8.62535 22.4477 8.71442C22.6047 8.78473 22.668 8.78473 22.75 8.71442C22.8508 8.62769 22.8367 8.473 22.6891 8.00891C22.532 7.52373 22.4992 7.34326 22.5508 7.26591C22.6094 7.17684 22.7477 7.12059 22.9375 7.11121C23.2868 7.09246 23.6008 7.287 23.6008 7.52842C23.6008 7.57999 23.5727 7.62921 23.5047 7.70421L23.411 7.80734L23.4719 7.93625C23.6571 8.32768 24.0977 8.31362 24.5267 7.9011C25.047 7.40185 25.0376 6.75026 24.5079 6.43149C24.1188 6.1971 23.6594 6.16195 22.9586 6.31195C22.8438 6.33539 22.7453 6.3518 22.7406 6.34711C22.736 6.34242 22.7688 6.2768 22.8157 6.20414C23.0407 5.85256 23.179 5.30878 23.179 4.76969C23.179 4.39467 23.0407 3.6001 22.9235 3.30243L22.8977 3.2368L22.7055 3.38446C22.6 3.4665 22.4149 3.62588 22.293 3.74073C21.6367 4.36889 21.2828 5.00876 21.196 5.72833L21.1843 5.83849L21.0109 5.63458C20.5937 5.13768 20.2421 4.88688 19.8319 4.79547C19.1709 4.64781 18.7162 5.13768 18.817 5.88537C18.899 6.49712 19.2811 6.8112 19.6702 6.58384L19.7733 6.5229L19.7569 6.4104C19.7217 6.18538 19.8202 6.08694 20.0757 6.09163C20.3593 6.09632 20.6546 6.29555 20.7507 6.54868C20.7929 6.6565 20.7929 6.65885 20.7437 6.74088C20.6921 6.82292 20.5398 6.9448 20.1179 7.24247C19.9866 7.33388 19.853 7.4417 19.8178 7.48154C19.6889 7.63624 19.7147 7.75812 19.8928 7.84015C19.9866 7.88469 20.0452 7.89172 20.296 7.89172C20.5632 7.89172 20.6007 7.88703 20.7202 7.83078L20.8538 7.7675L20.8679 7.85422C20.896 8.03001 20.8866 8.05579 20.6804 8.32768C20.1436 9.03553 19.6889 9.49024 19.2272 9.79494C18.8006 10.0715 18.4373 10.1465 18.0951 10.027C17.1669 9.70119 16.4169 8.71442 15.8614 7.08309C15.7161 6.6565 15.5661 6.11507 15.47 5.67677C15.4278 5.48926 15.3856 5.29706 15.3762 5.24784C15.3575 5.17283 15.3645 5.13299 15.4137 5.02517C15.4465 4.95251 15.4747 4.88923 15.477 4.88454C15.4817 4.88219 15.5286 4.92438 15.5872 4.97829C15.77 5.15408 16.2083 5.30643 16.4169 5.26893C16.5083 5.25018 16.5927 5.15877 16.5927 5.07439C16.5927 4.98767 16.4966 4.82125 16.2552 4.49311C16.0044 4.15325 15.913 3.99153 15.913 3.88605C15.913 3.78058 16.0981 3.61182 16.2739 3.55791C16.5575 3.46884 16.895 3.54853 16.9794 3.72432C17.0193 3.8087 17.0146 3.85089 16.9419 3.99153L16.8997 4.0759L16.9911 4.172C17.2091 4.41342 17.5044 4.39701 17.7646 4.12981C18.0459 3.83917 18.2029 3.35399 18.1279 3.00241C18.0506 2.65083 17.7576 2.4352 17.3029 2.40238C16.9255 2.37426 16.4802 2.52426 15.927 2.86178C15.8286 2.92272 15.7723 2.94616 15.7794 2.92507C15.7887 2.90397 15.8122 2.79615 15.8333 2.68365C15.8801 2.4352 15.8684 1.99221 15.8075 1.70391C15.7137 1.24686 15.4583 0.646827 15.1676 0.196804C14.9895 -0.0774284 14.966 -0.0727407 14.7457 0.260088Z" fill={color==='white'?'black':'white'}/>
                <path d="M5.24829 16.5053V17.2085H14.9167H24.5852V16.5053V15.8022H14.9167H5.24829V16.5053Z" fill={color==='white'?'black':'white'}/>
                </svg>
    }else{
        return <div></div>
    }
}


    return (
        <div className={componentStyles} onClick={(event)=>clickChecker(event)}>
            {isQueen(queenValue)}
        </div>
    );
};

export default Checker;