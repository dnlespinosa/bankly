let oneThroughNine = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let tenThroughNineteen = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tenThroughSixty = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty']

function timeWord(time) {
    let hour = time.split(':')[0]
    let minute = time.split(':')[1]
    let morning = 'am'
    let wordHour;
    let wordMinuteOne;
    let wordMinuteTwo;

    if(hour==='00' && minute === '00') {
        return 'Midnight'
    } else if (hour ==='12' && minute === '00') {
        return 'Noon'
    }


    // setting the hour number to the word
    if (hour > 12) {
        hour -= 12
        morning = 'pm'
    }
    if (hour[0] === 0) {
        hour = hour.replace('0', '')
    }
    if(hour >=10) {
        wordHour = tenThroughNineteen[(hour)-1]
    } else {
        wordHour = oneThroughNine[(hour)-1]
    }

    // setting the minute number to word
    if (minute > 20 && minute < 10) {
        let wordMinute = tenThroughNineteen[minute-10]
        return `${wordHour} ${wordMinute} ${morning}`
    } else {
        let splitMinute = minute.split('')
        if (splitMinute[0]==='0') {
            wordMinuteOne = 'Oh'
        } else {
            wordMinuteOne = tenThroughSixty[splitMinute[0]-1]
        }
        if (splitMinute[1]==='0'){
            return `${wordHour} ${wordMinuteOne} ${morning}`
        } else {
            wordMinut
            eTwo = oneThroughNine[minute-1]
        } 
    }
    return `${wordHour} ${wordMinuteOne} ${wordMinuteTwo} ${morning}`
}




module.exports = timeWord
