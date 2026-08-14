const localRecipes = [
    {
        id: "1",
        title: "Karnıyarık",
        category: "Ana Yemekler",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2023/12/karniyarik-yemekcom.jpg",
        time: "45 dk",
        servings: "4 Kişilik",
        tags: ["Geleneksel", "Etli", "Fırın"],
        ingredients: [
            { name: "Patlıcan", measure: "6 adet" },
            { name: "Kıyma", measure: "300 gram" },
            { name: "Kuru Soğan", measure: "2 adet" },
            { name: "Domates", measure: "2 adet" },
            { name: "Sivri Biber", measure: "4 adet" },
            { name: "Salça", measure: "1 yemek kaşığı" },
            { name: "Sarımsak", measure: "3 diş" },
            { name: "Sıvı Yağ", measure: "Kızartmak için" }
        ],
        instructions: "Öncelikle patlıcanları alacalı soyup tuzlu suda bekletin. Kuruladıktan sonra sıvı yağda her tarafını kızartın ve fırın tepsisine dizin.\n\nİç harcı için; soğanları küp küp doğrayıp az yağda kavurun. Kıymayı ekleyip rengi dönene kadar kavurmaya devam edin. Sarımsak, doğranmış domates, ince kıyılmış sivri biber ve salçayı ilave edin. Tuz ve karabiberini ayarlayıp 5 dakika pişirin.\n\nKızaran patlıcanların ortasını bıçakla çizip açın ve hazırladığınız kıymalı harcı içlerine doldurun.\nÜzerlerine domates ve biber dilimleri yerleştirin. Salçalı su hazırlayıp tepsinin tabanına dökün.\n\nÖnceden ısıtılmış 180 derece fırında yaklaşık 25-30 dakika pişirin. Sıcak servis yapın. Afiyet olsun!"
    },
    {
        id: "2",
        title: "Kayseri Mantısı",
        category: "Hamur İşleri",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/09/kayseri-mantisi-tarifi-1.jpg",
        time: "90 dk",
        servings: "4 Kişilik",
        tags: ["Yöresel", "Kayseri", "Hamur İşi"],
        ingredients: [
            { name: "Un", measure: "3 su bardağı" },
            { name: "Yumurta", measure: "1 adet" },
            { name: "Su", measure: "1 su bardağı (ılık)" },
            { name: "Kıyma", measure: "250 gram" },
            { name: "Soğan", measure: "1 adet" },
            { name: "Karabiber", measure: "1 çay kaşığı" },
            { name: "Sarımsaklı Yoğurt", measure: "Üzeri için" },
            { name: "Tereyağlı Salça Sosu", measure: "Üzeri için" }
        ],
        instructions: "Un, yumurta, tuz ve ılık suyu yoğurma kabına alıp sert bir hamur elde edene kadar yoğurun. Hamurun üzerini örtüp 30 dakika dinlendirin.\n\nİç harcı için; soğanı çok ince rendeleyin veya rondodan geçirin. Kıyma, karabiber ve tuz ile birlikte iyice yoğurun.\n\nDinlenen hamuru bezelere ayırın ve çok ince olmayacak şekilde oklava ile açın. Açtığınız hamuru küçük kareler halinde kesin.\nKestiğiniz her bir karenin ortasına kıymalı harçtan küçük parçalar koyun ve dört köşesini ortada birleştirerek sıkıca kapatın.\n\nTencerede kaynayan tuzlu suya mantıları atıp haşlayın. Mantılar suyun yüzeyine çıkmaya başladığında pişmiş demektir, kevgir ile süzerek alın.\n\nTabaklara aldığınız mantının üzerine bol sarımsaklı yoğurt dökün. En üste tereyağında kızdırılmış salçalı, naneli sos gezdirerek servis yapın."
    },
    {
        id: "3",
        title: "Ezogelin Çorbası",
        category: "Çorbalar",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/ezogelin-corbasi-yemekcom.jpg",
        time: "30 dk",
        servings: "6 Kişilik",
        tags: ["Başlangıç", "Geleneksel"],
        ingredients: [
            { name: "Kırmızı Mercimek", measure: "1 su bardağı" },
            { name: "Bulgur", measure: "2 yemek kaşığı" },
            { name: "Pirinç", measure: "2 yemek kaşığı" },
            { name: "Kuru Soğan", measure: "1 adet" },
            { name: "Domates Salçası", measure: "1 yemek kaşığı" },
            { name: "Tereyağı", measure: "2 yemek kaşığı" },
            { name: "Kuru Nane", measure: "1 yemek kaşığı" },
            { name: "Su veya Tavuk Suyu", measure: "6 su bardağı" }
        ],
        instructions: "Mercimek, bulgur ve pirinci tel süzgeçte bol su ile yıkayın.\n\nTencereye tereyağını alıp eritin. İnce yemeklik doğranmış soğanı ekleyip pembeleşene kadar kavurun.\nSalçayı ilave edip kokusu çıkana kadar kavurmaya devam edin. Ardından kuru nane, pul biber ve tuzu ekleyin.\n\nYıkanmış bakliyatları tencereye ekleyip 1-2 dakika karıştırın. Üzerine sıcak suyu (veya tavuk suyunu) ilave edin.\n\nTencerenin kapağını yarım kapatarak kısık ateşte mercimekler tamamen eriyene ve çorba kıvam alana kadar yaklaşık 25 dakika kaynatın.\nEğer çorba çok koyu olursa bir miktar daha sıcak su ekleyebilirsiniz. Limon sıkarak sıcak servis yapın."
    },
    {
        id: "4",
        title: "Ev Yapımı İskender Kebap",
        category: "Ana Yemekler",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/ev-yapimi-iskender-kebap-tarifi.jpg",
        time: "60 dk",
        servings: "2 Kişilik",
        tags: ["Bursa", "Kebap", "Etli"],
        ingredients: [
            { name: "Dana Biftek (Dondurulmuş)", measure: "400 gram" },
            { name: "Tırnak Pide", measure: "2 adet" },
            { name: "Tereyağı", measure: "3 yemek kaşığı" },
            { name: "Domates Sosu", measure: "1 su bardağı" },
            { name: "Yoğurt", measure: "1 kase" },
            { name: "Sıvı Yağ", measure: "2 yemek kaşığı" },
            { name: "Karabiber, Kekik", measure: "1'er çay kaşığı" },
            { name: "Sivri Biber ve Domates", measure: "Süslemek için" }
        ],
        instructions: "İskender yapmanın sırrı eti çok ince kesmektir. Bunun için eti derin dondurucuda hafif buzlanana kadar bekletin. Daha sonra bıçakla yaprak gibi çok ince dilimler halinde kesin.\n\nKestiğiniz etleri sıvı yağ eklediğiniz geniş bir tavada yüksek ateşte hızlıca soteleyin. Tuz, karabiber ve kekik ekleyip ocaktan alın.\n\nPideleri küp küp doğrayın. Bir tavada 1 yemek kaşığı tereyağını eritip pideleri hafifçe kıtırlaşana kadar çevirin.\nServis tabağının en altına kızarmış pideleri dizin. Üzerine sıcak domates sosundan gezdirin.\n\nPidelerin üzerine pişirdiğiniz yaprak etleri bolca yerleştirin. Tabağın kenarına bolca yoğurt, közlenmiş domates ve biber koyun.\n\nSon olarak küçük bir tavada kalan tereyağını fokurdayana kadar kızdırın ve servis esnasında etlerin üzerine dökün (O meşhur 'cozz' sesini duymalısınız). Hemen servis yapın."
    },
    {
        id: "5",
        title: "Zeytinyağlı Yaprak Sarma",
        category: "Zeytinyağlılar",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/zeytinyagli-yaprak-sarmasi-yemekcom.jpg",
        time: "120 dk",
        servings: "6 Kişilik",
        tags: ["Geleneksel", "Zeytinyağlı", "Vegan"],
        ingredients: [
            { name: "Asma Yaprağı", measure: "300 gram" },
            { name: "Pirinç", measure: "1.5 su bardağı" },
            { name: "Kuru Soğan", measure: "3 adet (Büyük)" },
            { name: "Zeytinyağı", measure: "Yarım su bardağı" },
            { name: "Kuşüzümü", measure: "2 yemek kaşığı" },
            { name: "Dolmalık Fıstık", measure: "2 yemek kaşığı" },
            { name: "Kuru Nane, Yenibahar", measure: "1'er çay kaşığı" },
            { name: "Limon", measure: "1 adet" }
        ],
        instructions: "Salamura yaprakları tuzunun çıkması için sıcak suda 15-20 dakika bekletin ve bol suyla yıkayın.\n\nİç harcı için; soğanları çok ince yemeklik doğrayın. Zeytinyağının yarısını tencereye alıp fıstıklarla beraber kavurun. Fıstıklar pembeleşince soğanları ekleyin.\nSoğanlar iyice yumuşayınca yıkanmış ve süzülmüş pirinci ekleyip kavurmaya devam edin.\nKuşüzümü, tuz, karabiber, nane, yenibahar, biraz tarçın ve 1 kesme şeker ilave edin.\n\nÜzerine 1 su bardağı sıcak su döküp, pirinçler suyunu çekene kadar kısık ateşte pişirin. Altını kapatıp demlenmeye bırakın.\n\nYaprakların sap kısımlarını koparın, parlak yüzü alta gelecek şekilde tezgaha serin. İç harçtan koyup kalem gibi incecik sarın.\nSardığınız dolmaları geniş bir tencereye sıkıca dizin. Üzerlerine limon dilimleri yerleştirin. Kalan zeytinyağını ve yarım su bardağı ılık suyu gezdirin.\n\nDolmaların açılmaması için üzerine porselen bir tabak kapatın. Kısık ateşte suları çekene kadar (yaklaşık 45-50 dakika) pişirin. Soğuk servis yapın."
    },
    {
        id: "6",
        title: "Fırın Sütlaç",
        category: "Tatlılar",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/11/firin-sutlac-yemekcom.jpg",
        time: "50 dk",
        servings: "6 Kişilik",
        tags: ["Tatlı", "Sütlü Tatlı", "Fırın"],
        ingredients: [
            { name: "Süt", measure: "1 Litre" },
            { name: "Toz Şeker", measure: "1 su bardağı" },
            { name: "Pirinç", measure: "Yarım su bardağı" },
            { name: "Nişasta", measure: "2 yemek kaşığı" },
            { name: "Yumurta Sarısı", measure: "1 adet" },
            { name: "Su", measure: "2 su bardağı" }
        ],
        instructions: "Pirinci yıkayıp 2 su bardağı su ile yumuşayana ve suyunu çekene kadar haşlayın.\nSütü (yarım bardak ayırın) tencereye alın. İçine haşlanmış pirinçleri ekleyip kaynatın. Kaynamaya başlayınca toz şekeri ilave edin ve 5-10 dakika daha kaynatın.\n\nAyırdığınız yarım bardak soğuk sütün içine nişasta ve yumurta sarısını koyup çırpıcıyla iyice ezin.\nKaynayan sütlaçtan 1-2 kepçe alıp nişastalı karışıma yavaşça ekleyerek ılıtın (kesilmemesi için).\nSonra bu karışımı tencereye yavaş yavaş ve sürekli karıştırarak ilave edin. Kıvam alana kadar kaynatıp ocaktan alın.\n\nSütlacı ısıya dayanıklı toprak kaselere (güveç) paylaştırın. Kaseleri derin bir fırın tepsisine dizin. Tepsinin içine kaselerin yarısına gelecek kadar soğuk su doldurun.\n\nÖnceden ısıtılmış 200 derece fırının en üst rafında, üzerleri iyice kızarıp yanık görünümü alana kadar fırınlayın. Oda sıcaklığına gelince buzdolabına kaldırın, soğuk servis yapın."
    },
    {
        id: "7",
        title: "Mercimek Köftesi",
        category: "Başlangıçlar",
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/mercimek-koftesi-yemekcom.jpg",
        time: "45 dk",
        servings: "8 Kişilik",
        tags: ["Geleneksel", "Çay Saati", "Vegan"],
        ingredients: [
            { name: "Kırmızı Mercimek", measure: "1 su bardağı" },
            { name: "İnce Bulgur (Köftelik)", measure: "1.5 su bardağı" },
            { name: "Su", measure: "3 su bardağı" },
            { name: "Kuru Soğan", measure: "2 adet" },
            { name: "Zeytinyağı", measure: "Yarım çay bardağı" },
            { name: "Salça", measure: "2 yemek kaşığı" },
            { name: "Yeşillik", measure: "1 Demet" },
            { name: "Limon ve Baharatlar", measure: "Göz kararı" }
        ],
        instructions: "Kırmızı mercimeği yıkayıp 3 su bardağı su ile iyice yumuşayıp ezilene kadar kaynatın.\nİçinde çok az su kalmışken ocağın altını kapatın. İçine ince bulguru ekleyip karıştırın. Tencerenin kapağını kapatıp bulgurun şişmesi için 20-30 dakika bekletin.\n\nBu sırada kuru soğanları çok minik yemeklik doğrayın. Zeytinyağında pembeleşene kadar kavurun. Domates ve biber salçasını ekleyip kokusu çıkana kadar kavurun.\n\nŞişen mercimek-bulgur karışımını geniş bir tepsiye alın. Üzerine hazırladığınız salçalı soğan harcını, tuz, kimyon ve pul biberi döküp iyice yoğurun.\nİnce ince kıyılmış taze soğan ve maydanozu ekleyin. Bolca limon suyu sıkarak (isteğe göre nar ekşisi de olur) malzemeler karışana kadar nazikçe yoğurun.\n\nHarcınızdan ceviz büyüklüğünde parçalar koparıp avuç içinizde sıkarak şekil verin. Marul yaprakları üzerinde, yanında limon dilimleriyle servis yapın."
    }
];

const appCategories = [
    { id: "cat1", name: "Ana Yemekler", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/ev-yapimi-iskender-kebap-tarifi.jpg" },
    { id: "cat2", name: "Çorbalar", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/ezogelin-corbasi-yemekcom.jpg" },
    { id: "cat3", name: "Zeytinyağlılar", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/zeytinyagli-yaprak-sarmasi-yemekcom.jpg" },
    { id: "cat4", name: "Hamur İşleri", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/09/kayseri-mantisi-tarifi-1.jpg" },
    { id: "cat5", name: "Tatlılar", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/11/firin-sutlac-yemekcom.jpg" },
    { id: "cat6", name: "Başlangıçlar", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/mercimek-koftesi-yemekcom.jpg" }
];
