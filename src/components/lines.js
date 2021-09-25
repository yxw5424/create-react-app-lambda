var today = new Date();
var hrs= today.getHours() 
var hhr = hrs > 12? hrs-12 : hrs
var mins=today.getMinutes();
console.log(hhr)
const updatehour = (hr) => {
    if ((hr === hhr && mins < 45) || (hr === hhr+1 && mins >= 45)){
    return true
    }
}



const line1 = [
    {
        word:'IT',
        IsActive: true,
        id:11
    },
    {
        word:'L',
        IsActive:false,
        id:12
    },
    {
        word:'IS',
        IsActive:true,
        id:13
    },
    {
        word:'ASAMPM',
        IsActive:false,
        id:14
    },
]

const line2=[
    {
        word:'AC',
        IsActive:false,
        id:21
    },
    {
        word:'QUARTER',
        IsActive:( (mins >= 15 && mins <30) || (mins >= 45)),
        id:22
    },
    {
        word:'DC',
        IsActive:false,
        id:23
    },
]
const line3=[
    {
        word:'TWENTY',
        IsActive:false,
        id:31
    },
    {
        word:'EIGHT',
        IsActive:false,
        id:32
    },
    
]
const line4=[
    {
        word:'HALF',
        IsActive:(mins>=30 && mins <45),
        id:41
    },
    {
        word:'STENF',
        IsActive:false,
        id:42
    },
    {
        word:'TO',
        IsActive:(mins>=45),
        id:42
    },
    
]
const line5=[
    {
        word:'PAST',
        IsActive:(mins<45),
        id:51
    },
    {
        word:'ERUNINE',
        IsActive:false,
        id:52
    },
    
]
const line6=[
    {
        word:'ONE',
        IsActive:updatehour(1),
        id:61
    },
    {
        word:'SIX',
        IsActive:updatehour(6),
        id:62
    },
    {
        word:'THREE',
        IsActive:updatehour(3),
        id:63
    },
]
const line7=[
    {
        word:'FOUR',
        IsActive:updatehour(4),
        id:71
    },
    {
        word:'FIVE',
        IsActive:updatehour(5),
        id:72
    },
    {
        word:'TWO',
        IsActive:updatehour(2),
        id:73
    },
]
const line8=[
    {
        word:'EIGHT',
        IsActive:updatehour(8),
        id:81
    },
    {
        word:'ELEVEN',
        IsActive:updatehour(11),
        id:82
    },
]

const line9=[
    {
        word:'SEVEN',
        IsActive:updatehour(7),
        id:91
    },
    {
        word:'TWELVE',
        IsActive:updatehour(12),
        id:92
    },
]

const line10=[
    {
        word:'TEN',
        IsActive:updatehour(10),
        id:101
    },
    {
        word:'SE',
        IsActive:false,
        id:102
    },
    {
        word:'O',
        IsActive:true,
        id:103,
    },
    {
        word:'CLOCK',
        IsActive:true,
        id:104
    },
]


const lines =[
    line1,line2,line3,line4,line5,line6,line7,line8,line9,line10
]

export default lines;
