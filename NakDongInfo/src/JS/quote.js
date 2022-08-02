const quotes = [
    {
        quote:"본성이 우리에게 준 가장 훌륭한 선물은 삶으로부터 도망치게 내버려둔다는 점이다. - 몽테뉴"
    },
    {
        quote:"자신의 종말을 기다리는 사람은 엄격한 영혼을 가졌다기보다는 오히려 본성이 감퇴된 것이 아닐까? - 샤토브리앙",
        
    },
    {
        quote:"자살에 이르게 되는 동기는 989가지, 자살 방법은 83가지에 이른다. - 1969년, 세계보건기구의 연구보고"
        
    },
    {
        quote:"사람이 죽음에 이르는 방법을 완벽하게 연구할 수는 없다. - 스칸디나비아 격언"
        
    },
    {
        quote:"삶은 타인들의 의지에 달려 있으나, 죽음은 자신의 의지에 달려 있다. - 몽테뉴"
        
    },
    {
        quote:"죽음은 사람을 슬프게 한다. 삶의 3분의 1을 잠으로 보내면서도. - 바이런"
        
    },
    {
        quote:"자살을 생각하는 일은 커다란 위안이 된다. 그 생각으로 불쾌한 밤을 잘 지내게 된다. - 프리드리히 니체"
        
    },
    {
        quote:"자기 자신을 죽일 수 없는 한, 사람은 인생에 관하여 침묵을 지켜야 한다. - 알베르 카뮈"
    
    },
    {
        quote:"사람은 태양도 죽음도 똑바로 바라볼 수 없다. - 로슈푸코"
        
    },
    {
        quote:"자살하는 것은 세상에 진지한 것이 있다고 믿는 것이다. - 모리스 바레"
    },
    ];
    
    
    const quote = document.getElementById("quote");
    
    todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);
    
    quote.innerText = todaysQuote.quote;