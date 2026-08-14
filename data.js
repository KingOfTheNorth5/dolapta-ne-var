const localRecipes = [
    {
        id: "1",
        title: "Karnıyarık",
        category: "Ana Yemekler",
        image: "https://www.themealdb.com/images/media/meals/ampz9v1763787134.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/72fgzj1764109947.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/jyylmo1763790808.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/ytme8t1764111401.jpg",
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
        image: "https://www.themealdb.com/images/media/meals/u5e9qq1763795441.jpg",
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
    },
    {
        id: "8",
        title: "Orijinal Adana Kebap",
        category: "Ana Yemekler",
        image: "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
        time: "60 dk",
        servings: "4 Kişilik",
        tags: ["Kebap", "Etli", "Izgara"],
        ingredients: [
            { name: "Kuzu Kıyma", measure: "500 gram (Zırh Çekimi)" },
            { name: "Kuyruk Yağı", measure: "100 gram" },
            { name: "Kırmızı Kapya Biber", measure: "2 adet" },
            { name: "Tuz", measure: "1 Tatlı Kaşığı" },
            { name: "Pul Biber", measure: "1 Yemek Kaşığı" }
        ],
        instructions: "Öncelikle kırmızı kapya biberleri çok ince bir şekilde doğrayın veya zırhtan geçirin. Biberlerin suyunu sıkarak iyice süzün, aksi halde kebabınız şişte tutunmaz.\nKuzu kıymayı (ideal olarak erkek kuzu boşluğu), çok ince kıyılmış kuyruk yağını, suyu sıkılmış kapya biberleri, tuz ve pul biberi geniş bir tepsiye alın.\nMalzemeleri elinizle yoğurmaya başlayın. Adana kebabın sırrı uzun yoğurmaktır. Et sakız kıvamına gelene kadar, yaklaşık 15-20 dakika yoğurun.\nYoğurduğunuz harcı buzdolabında en az 2 saat, vaktiniz varsa 1 gece dinlendirin.\nDinlenmiş etten portakal büyüklüğünde parçalar koparıp yassı şişlere, elinizi hafifçe ıslatarak yayın.\nMangal ateşinde (kömür tamamen kor haline gelip beyazlaştıktan sonra) şişleri sık sık çevirerek pişirin. Pide ve soğan salatasıyla servis yapın."
    },
    {
        id: "9",
        title: "Serinletici Naneli Cacık",
        category: "Başlangıçlar",
        image: "https://www.themealdb.com/images/media/meals/16zbeu1763789342.jpg",
        time: "10 dk",
        servings: "4 Kişilik",
        tags: ["Soğuk", "Meze", "Yoğurtlu"],
        ingredients: [
            { name: "Süzme Yoğurt", measure: "2 su bardağı" },
            { name: "Salatalık", measure: "3 adet" },
            { name: "Sarımsak", measure: "2 diş" },
            { name: "Taze Nane", measure: "Yarım Demet" },
            { name: "Zeytinyağı", measure: "1 yemek kaşığı" },
            { name: "Su", measure: "Kıvama göre" }
        ],
        instructions: "Salatalıkları alacalı soyduktan sonra ince ince rendeleyin (veya küp küp çok minik doğrayın).\nSarımsakları biraz tuzla ezerek püre haline getirin.\nDerin bir kasede süzme yoğurt, ezilmiş sarımsak ve azar azar soğuk su ekleyerek çırpma teliyle pürüzsüz bir kıvam alana kadar açın. Kıvamı ne çok sulu ne de çok koyu olmalıdır.\nRendelenmiş salatalıkları, incecik kıyılmış taze naneyi ve tuzu yoğurdun içine ekleyip tahta bir kaşıkla karıştırın.\nÜzerine sızma zeytinyağı gezdirip, buz küpleri ekleyerek buz gibi servis yapın."
    },
    {
        id: "10",
        title: "Bol Malzemeli Kumpir",
        category: "Ana Yemekler",
        image: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
        time: "75 dk",
        servings: "2 Kişilik",
        tags: ["Sokak Lezzeti", "Patates"],
        ingredients: [
            { name: "Büyük Boy Patates", measure: "2 adet" },
            { name: "Tereyağı", measure: "2 yemek kaşığı" },
            { name: "Kaşar Peyniri", measure: "1 su bardağı (Rendelenmiş)" },
            { name: "Sosis", measure: "2 adet" },
            { name: "Mısır ve Bezelye", measure: "Yarımşar çay bardağı" },
            { name: "Zeytin ve Kornişon", measure: "Göz kararı" },
            { name: "Ketçap & Mayonez", measure: "Üzeri için" }
        ],
        instructions: "Patatesleri iyice yıkayıp kuruladıktan sonra üzerine bıçakla birkaç delik açın. Daha sonra alüminyum folyoya hava almayacak şekilde sıkıca sarın.\nÖnceden ısıtılmış 200 derece fırında patatesler tamamen yumuşayana kadar (yaklaşık 60 dakika) pişirin.\nPatatesler fırından çıkar çıkmaz folyoyu açın. Ortasından uzunlamasına kesin ama tamamen ikiye bölmeyin.\nİçini bir kaşık yardımıyla kabuğuna zarar vermeden ezin. Patates sıcakken içine birer yemek kaşığı tereyağı ve bolca kaşar rendesi ekleyip, kaşarlar eriyip patatesle sakız gibi bütünleşene kadar hızla karıştırın.\nSosisleri hafifçe haşlayıp doğrayın. Püre haline gelmiş patatesin üzerine sosis, mısır, bezelye, dilimlenmiş zeytin ve doğranmış turşuyu ekleyin.\nEn üste ketçap ve mayonez sıkarak sıcak sıcak tüketin."
    },
    {
        id: "11",
        title: "Şehriyeli Pirinç Pilavı",
        category: "Ana Yemekler",
        image: "https://www.themealdb.com/images/media/meals/xw1ruy1763786501.jpg",
        time: "30 dk",
        servings: "4 Kişilik",
        tags: ["Yancı", "Geleneksel"],
        ingredients: [
            { name: "Baldo Pirinç", measure: "1.5 su bardağı" },
            { name: "Arpa Şehriye", measure: "Yarım çay bardağı" },
            { name: "Tereyağı", measure: "2 yemek kaşığı" },
            { name: "Sıvı Yağ", measure: "2 yemek kaşığı" },
            { name: "Sıcak Su veya Tavuk Suyu", measure: "2.5 su bardağı" },
            { name: "Tuz", measure: "1 Tatlı kaşığı" }
        ],
        instructions: "Pirinci geniş bir kaba alın, üzerine bir miktar tuz ve kaynar su ekleyip 20 dakika nişastasını salması için bekletin. Ardından soğuk suda suyu berraklaşana kadar iyice yıkayıp süzün.\nYayvan bir pilav tenceresine sıvı yağ ve tereyağını alın. Tereyağı eriyince arpa şehriyeleri ekleyin.\nŞehriyelerin rengi kahverengiye dönene kadar sürekli karıştırarak kavurun.\nSuyu tamamen süzülmüş pirinçleri ekleyin. Pirinçler şeffaflaşıp tane tane dökülene kadar (yaklaşık 5 dakika) orta ateşte kavurun.\nÜzerine sıcak suyu (ideali et veya tavuk suyudur) ve tuzu ilave edip karıştırın. Tencerenin kapağını kapatın.\nÖnce yüksek ateşte suyu kaynayana kadar, kaynadıktan sonra ise ocağın en küçük gözünde, en kısık ateşte pirinçler suyunu tamamen çekene kadar pişirin.\nOcaktan aldıktan sonra kapağın altına kağıt havlu koyarak 15-20 dakika demlenmeye bırakın."
    },
    {
        id: "12",
        title: "Acılı Antep Ezme",
        category: "Başlangıçlar",
        image: "https://www.themealdb.com/images/media/meals/pb6mj11763788331.jpg",
        time: "15 dk",
        servings: "6 Kişilik",
        tags: ["Acılı", "Meze", "Geleneksel"],
        ingredients: [
            { name: "Domates", measure: "3 adet (Olgun)" },
            { name: "Kuru Soğan", measure: "1 adet" },
            { name: "Sivri Biber", measure: "3 adet" },
            { name: "Sarımsak", measure: "3 diş" },
            { name: "Biber ve Domates Salçası", measure: "Yarımşar yemek kaşığı" },
            { name: "Zeytinyağı", measure: "3 yemek kaşığı" },
            { name: "Nar Ekşisi", measure: "2 yemek kaşığı" },
            { name: "Baharatlar", measure: "Göz kararı" }
        ],
        instructions: "Orijinal ezme robottan çekilmez, bıçakla zırhlanarak (çok ince doğranarak) yapılır.\nDomateslerin kabuklarını soyup olabildiğince minik küpler halinde doğrayın.\nSoğan, sarımsak ve çekirdekleri çıkarılmış sivri biberleri de tahtada bıçakla üzerinden defalarca geçerek çok ince kıyın.\nİncecik kıyılmış tüm sebzeleri geniş bir karıştırma kabına alın. Üzerine çok ince kıyılmış maydanoz ekleyin.\nAyrı bir kasede salçalar, zeytinyağı, nar ekşisi, limon suyu, tuz, isot, pul biber ve naneyi karıştırarak sosunu hazırlayın.\nHazırladığınız bu sosu sebzelerin üzerine döküp kaşıkla iyice ezerek harmanlayın.\nBuzdolabında 1-2 saat dinlendirirseniz lezzetler birbirine daha iyi geçecektir. Kebapların yanında soğuk servis yapın."
    },
    {
        id: "13",
        title: "Hakiki Antakya Humusu",
        category: "Başlangıçlar",
        image: "https://www.themealdb.com/images/media/meals/gpon5u1763801180.jpg",
        time: "20 dk",
        servings: "4 Kişilik",
        tags: ["Meze", "Nohut", "Vegan"],
        ingredients: [
            { name: "Nohut", measure: "2 su bardağı (Haşlanmış)" },
            { name: "Tahin", measure: "Yarım su bardağı" },
            { name: "Limon Suyu", measure: "Yarım çay bardağı" },
            { name: "Sarımsak", measure: "3 diş" },
            { name: "Zeytinyağı", measure: "Yarım çay bardağı" },
            { name: "Kimyon, Tuz", measure: "1'er Tatlı Kaşığı" },
            { name: "Buzlu Su", measure: "2 yemek kaşığı" }
        ],
        instructions: "Humusun pürüzsüz ipek gibi olması için haşlanmış nohutların kabuklarını tek tek soyarak işe başlayın. Bu işlem biraz sabır ister ama sonuç mükemmeldir.\nSoyulmuş nohutları mutfak robotuna (veya blendera) alın. Üzerine ezilmiş sarımsak, limon suyu, tahin, tuz ve bolca kimyon ekleyin.\nMakineyi çalıştırın. Karışım koyu bir püre halini almaya başladığında içine yavaş yavaş zeytinyağını ve en önemlisi buzlu suyu ilave edin. Buzlu su humusun rengini açar ve kıvamını pürüzsüzleştirir.\nYaklaşık 5 dakika boyunca robotta çektikten sonra kremsi ve pürüzsüz bir kıvam alacaktır.\nHumusu geniş ve sığ bir servis tabağına yayın, ortasında kaşıkla bir havuz açın.\nServis etmeden önce üzerine ekstra sızma zeytinyağı gezdirin, kırmızı toz biber ve nohut taneleriyle süsleyin."
    },
    {
        id: "14",
        title: "Kremalı Fırın Tavuk",
        category: "Ana Yemekler",
        image: "https://www.themealdb.com/images/media/meals/ro8mzj1763800655.jpg",
        time: "50 dk",
        servings: "4 Kişilik",
        tags: ["Tavuk", "Fırın", "Pratik"],
        ingredients: [
            { name: "Tavuk Baget veya But", measure: "6 adet" },
            { name: "Patates", measure: "3 adet" },
            { name: "Sıvı Krema", measure: "1 kutu (200ml)" },
            { name: "Zeytinyağı", measure: "2 yemek kaşığı" },
            { name: "Kekik, Köri, Karabiber", measure: "Göz kararı" },
            { name: "Sarımsak", measure: "2 diş" }
        ],
        instructions: "Patatesleri elma dilimi şeklinde kalın kalın doğrayın ve fırın kabının tabanına dizin.\nTavuk parçalarını yıkayıp kuruladıktan sonra derin bir kaseye alın.\nÜzerine zeytinyağı, rendelenmiş sarımsak, tuz, karabiber, kekik ve az miktarda köri ekleyerek tavukları bu sosta elinizle iyice harmanlayın.\nSosuyla bütünleşen tavukları fırın kabındaki patateslerin üzerine yerleştirin.\nSon olarak 1 kutu sıvı kremayı tavukların ve patateslerin üzerinde eşit şekilde gezdirin.\nÖnceden ısıtılmış 200 derece fırında, tavukların üzeri nar gibi kızarıp patatesler yumuşayana kadar yaklaşık 40-45 dakika pişirin. Kendi sosuyla birlikte sıcak servis yapın."
    },
    {
        id: "15",
        title: "Zeytinyağlı Enginar",
        category: "Zeytinyağlılar",
        image: "https://www.themealdb.com/images/media/meals/z458v91763817681.jpg",
        time: "40 dk",
        servings: "4 Kişilik",
        tags: ["Enginar", "Vegan", "Hafif"],
        ingredients: [
            { name: "Ayıklanmış Enginar Çanağı", measure: "4 adet" },
            { name: "Garnitür", measure: "1 kase" },
            { name: "Zeytinyağı", measure: "Yarım çay bardağı" },
            { name: "Portakal Suyu", measure: "1 su bardağı" },
            { name: "Limon", measure: "Yarım adet" },
            { name: "Dereotu", measure: "Süslemek için" }
        ],
        instructions: "Kararmamaları için limonlu suda beklettiğiniz enginar çanaklarını geniş ve yayvan bir tencereye tek sıra halinde dizin.\nOrta kısımlarına havuç, patates ve bezelyeden oluşan garnitürü tepeleme doldurun.\nAyrı bir kasede zeytinyağı, taze sıkılmış portakal suyu, yarım limonun suyu, tuz ve 1 tatlı kaşığı toz şekeri karıştırarak sosunu hazırlayın.\nHazırladığınız bu özel sosu enginarların üzerine kaşıkla gezdirerek dökün.\nTencerenin tabanında kalan su yeterli gelmezse yarım çay bardağı kadar ılık su ilave edebilirsiniz.\nTencerenin kapağını kapatın ve kaynayana kadar orta ateşte, kaynadıktan sonra kısık ateşte enginarlar çatal batacak kıvama gelene kadar yaklaşık 25-30 dakika pişirin.\nPişen enginarları tenceresinde kapağı kapalı olarak soğumaya bırakın (Zeytinyağlılar kendi tenceresinde soğumalıdır). Servis yaparken üzerine bolca taze dereotu serpiştirin."
    },
    {
        id: "16",
        title: "Şifalı Tavuk Suyu Çorbası",
        category: "Çorbalar",
        image: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        time: "45 dk",
        servings: "6 Kişilik",
        tags: ["Şifa", "Sıcak", "Geleneksel"],
        ingredients: [
            { name: "Tavuk But", measure: "2 adet" },
            { name: "Tel Şehriye", measure: "1 çay bardağı" },
            { name: "Su", measure: "6 su bardağı" },
            { name: "Tereyağı", measure: "1 yemek kaşığı" },
            { name: "Limon", measure: "Yarım adet" },
            { name: "Karabiber, Tuz", measure: "Göz kararı" },
            { name: "Maydanoz", measure: "Süslemek için" }
        ],
        instructions: "Tavuk butlarını iyice yıkayıp derin bir tencereye alın. Üzerine 6 su bardağı su ekleyerek etler iyice yumuşayana kadar yaklaşık 30-35 dakika haşlayın.\nHaşlanan tavukları tencereden alın ve soğuduktan sonra ince ince didikleyin. Kalan tavuk suyunu süzerek temiz bir tencereye aktarın.\nSüzülmüş tavuk suyunu ocağa alıp kaynamaya bırakın. Kaynayan suya tel şehriyeleri ilave edin.\nŞehriyeler yumuşamaya başladığında didiklenmiş tavuk etlerini de tencereye ekleyin.\nAyrı bir küçük tavada tereyağını eritip az miktarda pul biber veya nane ile kızdırın ve kaynayan çorbanın üzerine dökün.\nTuz, bol karabiber ve yarım limonun suyunu ekleyerek 5 dakika daha kaynatıp ocaktan alın. Üzerine ince kıyılmış maydanoz serperek sıcak sıcak servis yapın."
    },
    {
        id: "17",
        title: "Naneli Yayla Çorbası",
        category: "Çorbalar",
        image: "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
        time: "30 dk",
        servings: "6 Kişilik",
        tags: ["Yoğurtlu", "Hafif", "Geleneksel"],
        ingredients: [
            { name: "Pirinç", measure: "Yarım çay bardağı" },
            { name: "Yoğurt", measure: "1.5 su bardağı" },
            { name: "Yumurta Sarısı", measure: "1 adet" },
            { name: "Un", measure: "1 yemek kaşığı (Tepeleme)" },
            { name: "Su", measure: "6 su bardağı" },
            { name: "Tereyağı", measure: "2 yemek kaşığı" },
            { name: "Kuru Nane", measure: "1.5 yemek kaşığı" }
        ],
        instructions: "Pirinci yıkayıp süzün. Tencereye alın, üzerine suyu ilave edin ve pirinçler iyice yumuşayana kadar haşlayın.\nTerbiyesi için derin bir kasede yoğurt, un ve yumurta sarısını tel çırpıcıyla pürüzsüz olana kadar iyice çırpın.\nÇorbanın kesilmemesi için, kaynayan pirincin suyundan 1-2 kepçe alarak yoğurtlu terbiyeye yavaş yavaş ekleyin ve çırpmaya devam edin (Bu işleme ılıştırma denir).\nIlımış olan terbiyeyi tencereye azar azar ve sürekli karıştırarak dökün.\nÇorba kaynayana kadar karıştırmayı hiç bırakmayın. Kaynadıktan sonra altını kısıp 10 dakika daha pişirin. (Tuzu en son, çorbayı ocaktan alırken ekleyin ki yoğurt kesilmesin).\nKüçük bir sos tavasında tereyağını eritip kuru naneyi yakmadan kavurun. Naneli sosu çorbanın üzerine gezdirerek servis yapın."
    },
    {
        id: "18",
        title: "Köy Tarhanası Çorbası",
        category: "Çorbalar",
        image: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
        time: "20 dk",
        servings: "4 Kişilik",
        tags: ["Şifa", "Yöresel", "Sıcak"],
        ingredients: [
            { name: "Toz Tarhana", measure: "4 yemek kaşığı" },
            { name: "Su", measure: "5 su bardağı (Soğuk)" },
            { name: "Tereyağı", measure: "1 yemek kaşığı" },
            { name: "Sıvı Yağ", measure: "1 yemek kaşığı" },
            { name: "Domates Salçası", measure: "1 tatlı kaşığı" },
            { name: "Sarımsak", measure: "2 diş (Ezilmiş)" },
            { name: "Kuru Nane, Tuz", measure: "1'er çay kaşığı" }
        ],
        instructions: "Tarhananın topaklanmaması için, pişirmeye başlamadan önce toz tarhanayı bir kasede 1 su bardağı soğuk su ile karıştırıp 15 dakika yumuşaması için bekletin.\nTencereye sıvı yağ ve tereyağını alın. Tereyağı eriyince ezilmiş sarımsakları ve salçayı ekleyip kokusu çıkana kadar kavurun.\nÜzerine kuru naneyi ekleyip çok az çevirin.\nIslattığınız tarhanayı suyuyla beraber tencereye ilave edin. Üzerine kalan 4 bardak suyu (mutlaka soğuk veya oda sıcaklığında olmalı) ekleyin.\nÇorba kaynayana kadar çırpma teli veya tahta kaşıkla sürekli ve hızlıca karıştırın. Aksi halde tarhana dibine tutar ve topaklanır.\nKaynadıktan sonra tuzunu ekleyin ve ocağın altını kısıp 5 dakika daha kıvam alması için pişirin. Şifa niyetine sıcak servis yapın."
    },
    {
        id: "19",
        title: "Kremalı Domates Çorbası",
        category: "Çorbalar",
        image: "https://www.themealdb.com/images/media/meals/tsuyrq1511552690.jpg",
        time: "25 dk",
        servings: "4 Kişilik",
        tags: ["Klasik", "Pratik", "Hafif"],
        ingredients: [
            { name: "Domates", measure: "4 adet (Büyük, olgun)" },
            { name: "Tereyağı", measure: "2 yemek kaşığı" },
            { name: "Un", measure: "2 yemek kaşığı" },
            { name: "Domates Salçası", measure: "1 yemek kaşığı" },
            { name: "Süt", measure: "1 su bardağı" },
            { name: "Sıcak Su veya Et Suyu", measure: "4 su bardağı" },
            { name: "Kaşar Peyniri", measure: "Üzeri için rendelenmiş" }
        ],
        instructions: "Domateslerin kabuklarını soyun ve mutfak robotundan geçirerek pürüzsüz bir püre haline getirin (veya rendenin ince tarafıyla rendeleyin).\nTencereye tereyağını alın ve eritin. Unu ilave ederek unun kokusu çıkana kadar (yaklaşık 2-3 dakika) kısık ateşte kavurun.\nKavrulmuş unun üzerine salçayı ekleyin ve 1 dakika daha kavurun.\nHazırladığınız domates püresini tencereye ilave edin ve malzemelerle iyice bütünleşene kadar karıştırın.\nÜzerine sıcak suyu (et veya tavuk suyu çok daha lezzetli yapar) yavaş yavaş ve sürekli karıştırarak ekleyin.\nÇorba kaynamaya başladığında ocağın altını kısın ve 15 dakika kadar pişirin.\nOcaktan almaya yakın, 1 su bardağı soğuk sütü yavaşça ilave edin (sütü koymadan önce çorbanın suyundan 1-2 kaşık süte ekleyip ılıştırabilirsiniz) ve hızlıca karıştırın.\nTuzunu ekleyip 2 dakika daha kaynattıktan sonra ocaktan alın. Servis kaselerine paylaştırdıktan sonra üzerine bol kaşar rendesi dökerek servis yapın."
    }
];

const appCategories = [
    { id: "cat1", name: "Ana Yemekler", image: "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg" },
    { id: "cat2", name: "Çorbalar", image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" },
    { id: "cat3", name: "Zeytinyağlılar", image: "https://www.themealdb.com/images/media/meals/z458v91763817681.jpg" },
    { id: "cat4", name: "Hamur İşleri", image: "https://www.themealdb.com/images/media/meals/8825lo1763815264.jpg" },
    { id: "cat5", name: "Tatlılar", image: "https://www.themealdb.com/images/media/meals/towo9c1763814590.jpg" },
    { id: "cat6", name: "Başlangıçlar", image: "https://www.themealdb.com/images/media/meals/gpon5u1763801180.jpg" }
];
