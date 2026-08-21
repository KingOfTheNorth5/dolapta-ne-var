const localRecipes = [
    {
        "id": "1",
        "title": "Karnıyarık",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Karn%C4%B1yar%C4%B1k_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421044715%29.jpg/960px-Karn%C4%B1yar%C4%B1k_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421044715%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "45 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Geleneksel",
            "Etli",
            "Fırın"
        ],
        "ingredients": [
            {
                "name": "Patlıcan",
                "measure": "6 adet"
            },
            {
                "name": "Kıyma",
                "measure": "300 gram"
            },
            {
                "name": "Kuru Soğan",
                "measure": "2 adet"
            },
            {
                "name": "Domates",
                "measure": "2 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "4 adet"
            },
            {
                "name": "Salça",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "Kızartmak için"
            }
        ],
        "instructions": "Öncelikle patlıcanları alacalı soyup tuzlu suda bekletin. Kuruladıktan sonra sıvı yağda her tarafını kızartın ve fırın tepsisine dizin.\n\nİç harcı için; soğanları küp küp doğrayıp az yağda kavurun. Kıymayı ekleyip rengi dönene kadar kavurmaya devam edin. Sarımsak, doğranmış domates, ince kıyılmış sivri biber ve salçayı ilave edin. Tuz ve karabiberini ayarlayıp 5 dakika pişirin.\n\nKızaran patlıcanların ortasını bıçakla çizip açın ve hazırladığınız kıymalı harcı içlerine doldurun.\nÜzerlerine domates ve biber dilimleri yerleştirin. Salçalı su hazırlayıp tepsinin tabanına dökün.\n\nÖnceden ısıtılmış 180 derece fırında yaklaşık 25-30 dakika pişirin. Sıcak servis yapın. Afiyet olsun!"
    },
    {
        "id": "2",
        "title": "Kayseri Mantısı",
        "category": "Hamur İşleri",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "90 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Yöresel",
            "Kayseri",
            "Hamur İşi"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "3 su bardağı"
            },
            {
                "name": "Yumurta",
                "measure": "1 adet"
            },
            {
                "name": "Su",
                "measure": "1 su bardağı (ılık)"
            },
            {
                "name": "Kıyma",
                "measure": "250 gram"
            },
            {
                "name": "Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Karabiber",
                "measure": "1 çay kaşığı"
            },
            {
                "name": "Sarımsaklı Yoğurt",
                "measure": "Üzeri için"
            },
            {
                "name": "Tereyağlı Salça Sosu",
                "measure": "Üzeri için"
            }
        ],
        "instructions": "Un, yumurta, tuz ve ılık suyu yoğurma kabına alıp sert bir hamur elde edene kadar yoğurun. Hamurun üzerini örtüp 30 dakika dinlendirin.\n\nİç harcı için; soğanı çok ince rendeleyin veya rondodan geçirin. Kıyma, karabiber ve tuz ile birlikte iyice yoğurun.\n\nDinlenen hamuru bezelere ayırın ve çok ince olmayacak şekilde oklava ile açın. Açtığınız hamuru küçük kareler halinde kesin.\nKestiğiniz her bir karenin ortasına kıymalı harçtan küçük parçalar koyun ve dört köşesini ortada birleştirerek sıkıca kapatın.\n\nTencerede kaynayan tuzlu suya mantıları atıp haşlayın. Mantılar suyun yüzeyine çıkmaya başladığında pişmiş demektir, kevgir ile süzerek alın.\n\nTabaklara aldığınız mantının üzerine bol sarımsaklı yoğurt dökün. En üste tereyağında kızdırılmış salçalı, naneli sos gezdirerek servis yapın."
    },
    {
        "id": "3",
        "title": "Ezogelin Çorbası",
        "category": "Çorbalar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ezogelin_soup%2C_bread%2C_and_water.jpg/960px-Ezogelin_soup%2C_bread%2C_and_water.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "30 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Başlangıç",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Kırmızı Mercimek",
                "measure": "1 su bardağı"
            },
            {
                "name": "Bulgur",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Pirinç",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Domates Salçası",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kuru Nane",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Su veya Tavuk Suyu",
                "measure": "6 su bardağı"
            }
        ],
        "instructions": "Mercimek, bulgur ve pirinci tel süzgeçte bol su ile yıkayın.\n\nTencereye tereyağını alıp eritin. İnce yemeklik doğranmış soğanı ekleyip pembeleşene kadar kavurun.\nSalçayı ilave edip kokusu çıkana kadar kavurmaya devam edin. Ardından kuru nane, pul biber ve tuzu ekleyin.\n\nYıkanmış bakliyatları tencereye ekleyip 1-2 dakika karıştırın. Üzerine sıcak suyu (veya tavuk suyunu) ilave edin.\n\nTencerenin kapağını yarım kapatarak kısık ateşte mercimekler tamamen eriyene ve çorba kıvam alana kadar yaklaşık 25 dakika kaynatın.\nEğer çorba çok koyu olursa bir miktar daha sıcak su ekleyebilirsiniz. Limon sıkarak sıcak servis yapın."
    },
    {
        "id": "4",
        "title": "Ev Yapımı İskender Kebap",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "60 dk",
        "servings": "2 Kişilik",
        "tags": [
            "Bursa",
            "Kebap",
            "Etli"
        ],
        "ingredients": [
            {
                "name": "Dana Biftek (Dondurulmuş)",
                "measure": "400 gram"
            },
            {
                "name": "Tırnak Pide",
                "measure": "2 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Domates Sosu",
                "measure": "1 su bardağı"
            },
            {
                "name": "Yoğurt",
                "measure": "1 kase"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Karabiber, Kekik",
                "measure": "1'er çay kaşığı"
            },
            {
                "name": "Sivri Biber ve Domates",
                "measure": "Süslemek için"
            }
        ],
        "instructions": "İskender yapmanın sırrı eti çok ince kesmektir. Bunun için eti derin dondurucuda hafif buzlanana kadar bekletin. Daha sonra bıçakla yaprak gibi çok ince dilimler halinde kesin.\n\nKestiğiniz etleri sıvı yağ eklediğiniz geniş bir tavada yüksek ateşte hızlıca soteleyin. Tuz, karabiber ve kekik ekleyip ocaktan alın.\n\nPideleri küp küp doğrayın. Bir tavada 1 yemek kaşığı tereyağını eritip pideleri hafifçe kıtırlaşana kadar çevirin.\nServis tabağının en altına kızarmış pideleri dizin. Üzerine sıcak domates sosundan gezdirin.\n\nPidelerin üzerine pişirdiğiniz yaprak etleri bolca yerleştirin. Tabağın kenarına bolca yoğurt, közlenmiş domates ve biber koyun.\n\nSon olarak küçük bir tavada kalan tereyağını fokurdayana kadar kızdırın ve servis esnasında etlerin üzerine dökün (O meşhur 'cozz' sesini duymalısınız). Hemen servis yapın."
    },
    {
        "id": "5",
        "title": "Zeytinyağlı Yaprak Sarma",
        "category": "Zeytinyağlılar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vi%C5%9Fneli_Yaprak_Sarma.jpg/960px-Vi%C5%9Fneli_Yaprak_Sarma.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "120 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Geleneksel",
            "Zeytinyağlı",
            "Vegan"
        ],
        "ingredients": [
            {
                "name": "Asma Yaprağı",
                "measure": "300 gram"
            },
            {
                "name": "Pirinç",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Kuru Soğan",
                "measure": "3 adet (Büyük)"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım su bardağı"
            },
            {
                "name": "Kuşüzümü",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Dolmalık Fıstık",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kuru Nane, Yenibahar",
                "measure": "1'er çay kaşığı"
            },
            {
                "name": "Limon",
                "measure": "1 adet"
            }
        ],
        "instructions": "Salamura yaprakları tuzunun çıkması için sıcak suda 15-20 dakika bekletin ve bol suyla yıkayın.\n\nİç harcı için; soğanları çok ince yemeklik doğrayın. Zeytinyağının yarısını tencereye alıp fıstıklarla beraber kavurun. Fıstıklar pembeleşince soğanları ekleyin.\nSoğanlar iyice yumuşayınca yıkanmış ve süzülmüş pirinci ekleyip kavurmaya devam edin.\nKuşüzümü, tuz, karabiber, nane, yenibahar, biraz tarçın ve 1 kesme şeker ilave edin.\n\nÜzerine 1 su bardağı sıcak su döküp, pirinçler suyunu çekene kadar kısık ateşte pişirin. Altını kapatıp demlenmeye bırakın.\n\nYaprakların sap kısımlarını koparın, parlak yüzü alta gelecek şekilde tezgaha serin. İç harçtan koyup kalem gibi incecik sarın.\nSardığınız dolmaları geniş bir tencereye sıkıca dizin. Üzerlerine limon dilimleri yerleştirin. Kalan zeytinyağını ve yarım su bardağı ılık suyu gezdirin.\n\nDolmaların açılmaması için üzerine porselen bir tabak kapatın. Kısık ateşte suları çekene kadar (yaklaşık 45-50 dakika) pişirin. Soğuk servis yapın."
    },
    {
        "id": "6",
        "title": "Fırın Sütlaç",
        "category": "Tatlılar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg/960px-S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "50 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Tatlı",
            "Sütlü Tatlı",
            "Fırın"
        ],
        "ingredients": [
            {
                "name": "Süt",
                "measure": "1 Litre"
            },
            {
                "name": "Toz Şeker",
                "measure": "1 su bardağı"
            },
            {
                "name": "Pirinç",
                "measure": "Yarım su bardağı"
            },
            {
                "name": "Nişasta",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Yumurta Sarısı",
                "measure": "1 adet"
            },
            {
                "name": "Su",
                "measure": "2 su bardağı"
            }
        ],
        "instructions": "Pirinci yıkayıp 2 su bardağı su ile yumuşayana ve suyunu çekene kadar haşlayın.\nSütü (yarım bardak ayırın) tencereye alın. İçine haşlanmış pirinçleri ekleyip kaynatın. Kaynamaya başlayınca toz şekeri ilave edin ve 5-10 dakika daha kaynatın.\n\nAyırdığınız yarım bardak soğuk sütün içine nişasta ve yumurta sarısını koyup çırpıcıyla iyice ezin.\nKaynayan sütlaçtan 1-2 kepçe alıp nişastalı karışıma yavaşça ekleyerek ılıtın (kesilmemesi için).\nSonra bu karışımı tencereye yavaş yavaş ve sürekli karıştırarak ilave edin. Kıvam alana kadar kaynatıp ocaktan alın.\n\nSütlacı ısıya dayanıklı toprak kaselere (güveç) paylaştırın. Kaseleri derin bir fırın tepsisine dizin. Tepsinin içine kaselerin yarısına gelecek kadar soğuk su doldurun.\n\nÖnceden ısıtılmış 200 derece fırının en üst rafında, üzerleri iyice kızarıp yanık görünümü alana kadar fırınlayın. Oda sıcaklığına gelince buzdolabına kaldırın, soğuk servis yapın."
    },
    {
        "id": "7",
        "title": "Mercimek Köftesi",
        "category": "Başlangıçlar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mercimekkoftesi.jpg/960px-Mercimekkoftesi.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "45 dk",
        "servings": "8 Kişilik",
        "tags": [
            "Geleneksel",
            "Çay Saati",
            "Vegan"
        ],
        "ingredients": [
            {
                "name": "Kırmızı Mercimek",
                "measure": "1 su bardağı"
            },
            {
                "name": "İnce Bulgur (Köftelik)",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Su",
                "measure": "3 su bardağı"
            },
            {
                "name": "Kuru Soğan",
                "measure": "2 adet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Salça",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Yeşillik",
                "measure": "1 Demet"
            },
            {
                "name": "Limon ve Baharatlar",
                "measure": "Göz kararı"
            }
        ],
        "instructions": "Kırmızı mercimeği yıkayıp 3 su bardağı su ile iyice yumuşayıp ezilene kadar kaynatın.\nİçinde çok az su kalmışken ocağın altını kapatın. İçine ince bulguru ekleyip karıştırın. Tencerenin kapağını kapatıp bulgurun şişmesi için 20-30 dakika bekletin.\n\nBu sırada kuru soğanları çok minik yemeklik doğrayın. Zeytinyağında pembeleşene kadar kavurun. Domates ve biber salçasını ekleyip kokusu çıkana kadar kavurun.\n\nŞişen mercimek-bulgur karışımını geniş bir tepsiye alın. Üzerine hazırladığınız salçalı soğan harcını, tuz, kimyon ve pul biberi döküp iyice yoğurun.\nİnce ince kıyılmış taze soğan ve maydanozu ekleyin. Bolca limon suyu sıkarak (isteğe göre nar ekşisi de olur) malzemeler karışana kadar nazikçe yoğurun.\n\nHarcınızdan ceviz büyüklüğünde parçalar koparıp avuç içinizde sıkarak şekil verin. Marul yaprakları üzerinde, yanında limon dilimleriyle servis yapın."
    },
    {
        "id": "8",
        "title": "Orijinal Adana Kebap",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adana_Kebap.jpg/960px-Adana_Kebap.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "60 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kebap",
            "Etli",
            "Izgara"
        ],
        "ingredients": [
            {
                "name": "Kuzu Kıyma",
                "measure": "500 gram (Zırh Çekimi)"
            },
            {
                "name": "Kuyruk Yağı",
                "measure": "100 gram"
            },
            {
                "name": "Kırmızı Kapya Biber",
                "measure": "2 adet"
            },
            {
                "name": "Tuz",
                "measure": "1 Tatlı Kaşığı"
            },
            {
                "name": "Pul Biber",
                "measure": "1 Yemek Kaşığı"
            }
        ],
        "instructions": "Öncelikle kırmızı kapya biberleri çok ince bir şekilde doğrayın veya zırhtan geçirin. Biberlerin suyunu sıkarak iyice süzün, aksi halde kebabınız şişte tutunmaz.\nKuzu kıymayı (ideal olarak erkek kuzu boşluğu), çok ince kıyılmış kuyruk yağını, suyu sıkılmış kapya biberleri, tuz ve pul biberi geniş bir tepsiye alın.\nMalzemeleri elinizle yoğurmaya başlayın. Adana kebabın sırrı uzun yoğurmaktır. Et sakız kıvamına gelene kadar, yaklaşık 15-20 dakika yoğurun.\nYoğurduğunuz harcı buzdolabında en az 2 saat, vaktiniz varsa 1 gece dinlendirin.\nDinlenmiş etten portakal büyüklüğünde parçalar koparıp yassı şişlere, elinizi hafifçe ıslatarak yayın.\nMangal ateşinde (kömür tamamen kor haline gelip beyazlaştıktan sonra) şişleri sık sık çevirerek pişirin. Pide ve soğan salatasıyla servis yapın."
    },
    {
        "id": "9",
        "title": "Serinletici Naneli Cacık",
        "category": "Başlangıçlar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cacik-1.jpg/960px-Cacik-1.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "10 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Soğuk",
            "Meze",
            "Yoğurtlu"
        ],
        "ingredients": [
            {
                "name": "Süzme Yoğurt",
                "measure": "2 su bardağı"
            },
            {
                "name": "Salatalık",
                "measure": "3 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            },
            {
                "name": "Taze Nane",
                "measure": "Yarım Demet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Su",
                "measure": "Kıvama göre"
            }
        ],
        "instructions": "Salatalıkları alacalı soyduktan sonra ince ince rendeleyin (veya küp küp çok minik doğrayın).\nSarımsakları biraz tuzla ezerek püre haline getirin.\nDerin bir kasede süzme yoğurt, ezilmiş sarımsak ve azar azar soğuk su ekleyerek çırpma teliyle pürüzsüz bir kıvam alana kadar açın. Kıvamı ne çok sulu ne de çok koyu olmalıdır.\nRendelenmiş salatalıkları, incecik kıyılmış taze naneyi ve tuzu yoğurdun içine ekleyip tahta bir kaşıkla karıştırın.\nÜzerine sızma zeytinyağı gezdirip, buz küpleri ekleyerek buz gibi servis yapın."
    },
    {
        "id": "10",
        "title": "Bol Malzemeli Kumpir",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kumpir_-_Turkish_Cuisine.jpg/960px-Kumpir_-_Turkish_Cuisine.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "75 dk",
        "servings": "2 Kişilik",
        "tags": [
            "Sokak Lezzeti",
            "Patates"
        ],
        "ingredients": [
            {
                "name": "Büyük Boy Patates",
                "measure": "2 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kaşar Peyniri",
                "measure": "1 su bardağı (Rendelenmiş)"
            },
            {
                "name": "Sosis",
                "measure": "2 adet"
            },
            {
                "name": "Mısır ve Bezelye",
                "measure": "Yarımşar çay bardağı"
            },
            {
                "name": "Zeytin ve Kornişon",
                "measure": "Göz kararı"
            },
            {
                "name": "Ketçap & Mayonez",
                "measure": "Üzeri için"
            }
        ],
        "instructions": "Patatesleri iyice yıkayıp kuruladıktan sonra üzerine bıçakla birkaç delik açın. Daha sonra alüminyum folyoya hava almayacak şekilde sıkıca sarın.\nÖnceden ısıtılmış 200 derece fırında patatesler tamamen yumuşayana kadar (yaklaşık 60 dakika) pişirin.\nPatatesler fırından çıkar çıkmaz folyoyu açın. Ortasından uzunlamasına kesin ama tamamen ikiye bölmeyin.\nİçini bir kaşık yardımıyla kabuğuna zarar vermeden ezin. Patates sıcakken içine birer yemek kaşığı tereyağı ve bolca kaşar rendesi ekleyip, kaşarlar eriyip patatesle sakız gibi bütünleşene kadar hızla karıştırın.\nSosisleri hafifçe haşlayıp doğrayın. Püre haline gelmiş patatesin üzerine sosis, mısır, bezelye, dilimlenmiş zeytin ve doğranmış turşuyu ekleyin.\nEn üste ketçap ve mayonez sıkarak sıcak sıcak tüketin."
    },
    {
        "id": "11",
        "title": "Şehriyeli Pirinç Pilavı",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pilaf_of_Turkey_%28as_accompany_dish%29.jpg/960px-Pilaf_of_Turkey_%28as_accompany_dish%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Yancı",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Baldo Pirinç",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Arpa Şehriye",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Sıcak Su veya Tavuk Suyu",
                "measure": "2.5 su bardağı"
            },
            {
                "name": "Tuz",
                "measure": "1 Tatlı kaşığı"
            }
        ],
        "instructions": "Pirinci geniş bir kaba alın, üzerine bir miktar tuz ve kaynar su ekleyip 20 dakika nişastasını salması için bekletin. Ardından soğuk suda suyu berraklaşana kadar iyice yıkayıp süzün.\nYayvan bir pilav tenceresine sıvı yağ ve tereyağını alın. Tereyağı eriyince arpa şehriyeleri ekleyin.\nŞehriyelerin rengi kahverengiye dönene kadar sürekli karıştırarak kavurun.\nSuyu tamamen süzülmüş pirinçleri ekleyin. Pirinçler şeffaflaşıp tane tane dökülene kadar (yaklaşık 5 dakika) orta ateşte kavurun.\nÜzerine sıcak suyu (ideali et veya tavuk suyudur) ve tuzu ilave edip karıştırın. Tencerenin kapağını kapatın.\nÖnce yüksek ateşte suyu kaynayana kadar, kaynadıktan sonra ise ocağın en küçük gözünde, en kısık ateşte pirinçler suyunu tamamen çekene kadar pişirin.\nOcaktan aldıktan sonra kapağın altına kağıt havlu koyarak 15-20 dakika demlenmeye bırakın."
    },
    {
        "id": "12",
        "title": "Acılı Antep Ezme",
        "category": "Başlangıçlar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ac%C4%B1l%C4%B1_Ezme.jpg/960px-Ac%C4%B1l%C4%B1_Ezme.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "15 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Acılı",
            "Meze",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Domates",
                "measure": "3 adet (Olgun)"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "3 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Biber ve Domates Salçası",
                "measure": "Yarımşar yemek kaşığı"
            },
            {
                "name": "Zeytinyağı",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Nar Ekşisi",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Baharatlar",
                "measure": "Göz kararı"
            }
        ],
        "instructions": "Orijinal ezme robottan çekilmez, bıçakla zırhlanarak (çok ince doğranarak) yapılır.\nDomateslerin kabuklarını soyup olabildiğince minik küpler halinde doğrayın.\nSoğan, sarımsak ve çekirdekleri çıkarılmış sivri biberleri de tahtada bıçakla üzerinden defalarca geçerek çok ince kıyın.\nİncecik kıyılmış tüm sebzeleri geniş bir karıştırma kabına alın. Üzerine çok ince kıyılmış maydanoz ekleyin.\nAyrı bir kasede salçalar, zeytinyağı, nar ekşisi, limon suyu, tuz, isot, pul biber ve naneyi karıştırarak sosunu hazırlayın.\nHazırladığınız bu sosu sebzelerin üzerine döküp kaşıkla iyice ezerek harmanlayın.\nBuzdolabında 1-2 saat dinlendirirseniz lezzetler birbirine daha iyi geçecektir. Kebapların yanında soğuk servis yapın."
    },
    {
        "id": "13",
        "title": "Hakiki Antakya Humusu",
        "category": "Başlangıçlar",
        "image": "https://www.themealdb.com/images/media/meals/gpon5u1763801180.jpg",
        "time": "20 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Meze",
            "Nohut",
            "Vegan"
        ],
        "ingredients": [
            {
                "name": "Nohut",
                "measure": "2 su bardağı (Haşlanmış)"
            },
            {
                "name": "Tahin",
                "measure": "Yarım su bardağı"
            },
            {
                "name": "Limon Suyu",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Kimyon, Tuz",
                "measure": "1'er Tatlı Kaşığı"
            },
            {
                "name": "Buzlu Su",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Humusun pürüzsüz ipek gibi olması için haşlanmış nohutların kabuklarını tek tek soyarak işe başlayın. Bu işlem biraz sabır ister ama sonuç mükemmeldir.\nSoyulmuş nohutları mutfak robotuna (veya blendera) alın. Üzerine ezilmiş sarımsak, limon suyu, tahin, tuz ve bolca kimyon ekleyin.\nMakineyi çalıştırın. Karışım koyu bir püre halini almaya başladığında içine yavaş yavaş zeytinyağını ve en önemlisi buzlu suyu ilave edin. Buzlu su humusun rengini açar ve kıvamını pürüzsüzleştirir.\nYaklaşık 5 dakika boyunca robotta çektikten sonra kremsi ve pürüzsüz bir kıvam alacaktır.\nHumusu geniş ve sığ bir servis tabağına yayın, ortasında kaşıkla bir havuz açın.\nServis etmeden önce üzerine ekstra sızma zeytinyağı gezdirin, kırmızı toz biber ve nohut taneleriyle süsleyin."
    },
    {
        "id": "14",
        "title": "Kremalı Fırın Tavuk",
        "category": "Ana Yemekler",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "time": "50 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Tavuk",
            "Fırın",
            "Pratik"
        ],
        "ingredients": [
            {
                "name": "Tavuk Baget veya But",
                "measure": "6 adet"
            },
            {
                "name": "Patates",
                "measure": "3 adet"
            },
            {
                "name": "Sıvı Krema",
                "measure": "1 kutu (200ml)"
            },
            {
                "name": "Zeytinyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kekik, Köri, Karabiber",
                "measure": "Göz kararı"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            }
        ],
        "instructions": "Patatesleri elma dilimi şeklinde kalın kalın doğrayın ve fırın kabının tabanına dizin.\nTavuk parçalarını yıkayıp kuruladıktan sonra derin bir kaseye alın.\nÜzerine zeytinyağı, rendelenmiş sarımsak, tuz, karabiber, kekik ve az miktarda köri ekleyerek tavukları bu sosta elinizle iyice harmanlayın.\nSosuyla bütünleşen tavukları fırın kabındaki patateslerin üzerine yerleştirin.\nSon olarak 1 kutu sıvı kremayı tavukların ve patateslerin üzerinde eşit şekilde gezdirin.\nÖnceden ısıtılmış 200 derece fırında, tavukların üzeri nar gibi kızarıp patatesler yumuşayana kadar yaklaşık 40-45 dakika pişirin. Kendi sosuyla birlikte sıcak servis yapın."
    },
    {
        "id": "16",
        "title": "Şifalı Tavuk Suyu Çorbası",
        "category": "Çorbalar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Chicken_soup_in_Ankara.jpg/960px-Chicken_soup_in_Ankara.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "45 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Şifa",
            "Sıcak",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Tavuk But",
                "measure": "2 adet"
            },
            {
                "name": "Tel Şehriye",
                "measure": "1 çay bardağı"
            },
            {
                "name": "Su",
                "measure": "6 su bardağı"
            },
            {
                "name": "Tereyağı",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Limon",
                "measure": "Yarım adet"
            },
            {
                "name": "Karabiber, Tuz",
                "measure": "Göz kararı"
            },
            {
                "name": "Maydanoz",
                "measure": "Süslemek için"
            }
        ],
        "instructions": "Tavuk butlarını iyice yıkayıp derin bir tencereye alın. Üzerine 6 su bardağı su ekleyerek etler iyice yumuşayana kadar yaklaşık 30-35 dakika haşlayın.\nHaşlanan tavukları tencereden alın ve soğuduktan sonra ince ince didikleyin. Kalan tavuk suyunu süzerek temiz bir tencereye aktarın.\nSüzülmüş tavuk suyunu ocağa alıp kaynamaya bırakın. Kaynayan suya tel şehriyeleri ilave edin.\nŞehriyeler yumuşamaya başladığında didiklenmiş tavuk etlerini de tencereye ekleyin.\nAyrı bir küçük tavada tereyağını eritip az miktarda pul biber veya nane ile kızdırın ve kaynayan çorbanın üzerine dökün.\nTuz, bol karabiber ve yarım limonun suyunu ekleyerek 5 dakika daha kaynatıp ocaktan alın. Üzerine ince kıyılmış maydanoz serperek sıcak sıcak servis yapın."
    },
    {
        "id": "17",
        "title": "Naneli Yayla Çorbası",
        "category": "Çorbalar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Yayla_chorba.jpg/960px-Yayla_chorba.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "30 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Yoğurtlu",
            "Hafif",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Pirinç",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Yoğurt",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Yumurta Sarısı",
                "measure": "1 adet"
            },
            {
                "name": "Un",
                "measure": "1 yemek kaşığı (Tepeleme)"
            },
            {
                "name": "Su",
                "measure": "6 su bardağı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Kuru Nane",
                "measure": "1.5 yemek kaşığı"
            }
        ],
        "instructions": "Pirinci yıkayıp süzün. Tencereye alın, üzerine suyu ilave edin ve pirinçler iyice yumuşayana kadar haşlayın.\nTerbiyesi için derin bir kasede yoğurt, un ve yumurta sarısını tel çırpıcıyla pürüzsüz olana kadar iyice çırpın.\nÇorbanın kesilmemesi için, kaynayan pirincin suyundan 1-2 kepçe alarak yoğurtlu terbiyeye yavaş yavaş ekleyin ve çırpmaya devam edin (Bu işleme ılıştırma denir).\nIlımış olan terbiyeyi tencereye azar azar ve sürekli karıştırarak dökün.\nÇorba kaynayana kadar karıştırmayı hiç bırakmayın. Kaynadıktan sonra altını kısıp 10 dakika daha pişirin. (Tuzu en son, çorbayı ocaktan alırken ekleyin ki yoğurt kesilmesin).\nKüçük bir sos tavasında tereyağını eritip kuru naneyi yakmadan kavurun. Naneli sosu çorbanın üzerine gezdirerek servis yapın."
    },
    {
        "id": "18",
        "title": "Köy Tarhanası Çorbası",
        "category": "Çorbalar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tarhana_soup_in_Ankara.jpg/960px-Tarhana_soup_in_Ankara.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "time": "20 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Şifa",
            "Yöresel",
            "Sıcak"
        ],
        "ingredients": [
            {
                "name": "Toz Tarhana",
                "measure": "4 yemek kaşığı"
            },
            {
                "name": "Su",
                "measure": "5 su bardağı (Soğuk)"
            },
            {
                "name": "Tereyağı",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Domates Salçası",
                "measure": "1 tatlı kaşığı"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş (Ezilmiş)"
            },
            {
                "name": "Kuru Nane, Tuz",
                "measure": "1'er çay kaşığı"
            }
        ],
        "instructions": "Tarhananın topaklanmaması için, pişirmeye başlamadan önce toz tarhanayı bir kasede 1 su bardağı soğuk su ile karıştırıp 15 dakika yumuşaması için bekletin.\nTencereye sıvı yağ ve tereyağını alın. Tereyağı eriyince ezilmiş sarımsakları ve salçayı ekleyip kokusu çıkana kadar kavurun.\nÜzerine kuru naneyi ekleyip çok az çevirin.\nIslattığınız tarhanayı suyuyla beraber tencereye ilave edin. Üzerine kalan 4 bardak suyu (mutlaka soğuk veya oda sıcaklığında olmalı) ekleyin.\nÇorba kaynayana kadar çırpma teli veya tahta kaşıkla sürekli ve hızlıca karıştırın. Aksi halde tarhana dibine tutar ve topaklanır.\nKaynadıktan sonra tuzunu ekleyin ve ocağın altını kısıp 5 dakika daha kıvam alması için pişirin. Şifa niyetine sıcak servis yapın."
    },
    {
        "id": "19",
        "title": "Kremalı Domates Çorbası",
        "category": "Çorbalar",
        "image": "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
        "time": "25 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Klasik",
            "Pratik",
            "Hafif"
        ],
        "ingredients": [
            {
                "name": "Domates",
                "measure": "4 adet (Büyük, olgun)"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Un",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Domates Salçası",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Süt",
                "measure": "1 su bardağı"
            },
            {
                "name": "Sıcak Su veya Et Suyu",
                "measure": "4 su bardağı"
            },
            {
                "name": "Kaşar Peyniri",
                "measure": "Üzeri için rendelenmiş"
            }
        ],
        "instructions": "Domateslerin kabuklarını soyun ve mutfak robotundan geçirerek pürüzsüz bir püre haline getirin (veya rendenin ince tarafıyla rendeleyin).\nTencereye tereyağını alın ve eritin. Unu ilave ederek unun kokusu çıkana kadar (yaklaşık 2-3 dakika) kısık ateşte kavurun.\nKavrulmuş unun üzerine salçayı ekleyin ve 1 dakika daha kavurun.\nHazırladığınız domates püresini tencereye ilave edin ve malzemelerle iyice bütünleşene kadar karıştırın.\nÜzerine sıcak suyu (et veya tavuk suyu çok daha lezzetli yapar) yavaş yavaş ve sürekli karıştırarak ekleyin.\nÇorba kaynamaya başladığında ocağın altını kısın ve 15 dakika kadar pişirin.\nOcaktan almaya yakın, 1 su bardağı soğuk sütü yavaşça ilave edin (sütü koymadan önce çorbanın suyundan 1-2 kaşık süte ekleyip ılıştırabilirsiniz) ve hızlıca karıştırın.\nTuzunu ekleyip 2 dakika daha kaynattıktan sonra ocaktan alın. Servis kaselerine paylaştırdıktan sonra üzerine bol kaşar rendesi dökerek servis yapın."
    },
    {
        "title": "Testi Kebabı",
        "category": "Ana Yemekler",
        "time": "120 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Yozgat",
            "Etli",
            "Fırın"
        ],
        "ingredients": [
            {
                "name": "Kuşbaşı Et",
                "measure": "500 gram"
            },
            {
                "name": "Domates",
                "measure": "3 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "4 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "5 diş"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Etleri ve doğranmış sebzeleri baharatlarla harmanlayın.\nTestinin içine doldurun ve üzerine tereyağı parçaları koyun.\nTestinin ağzını hamurla kapatın ve ortasına küçük bir delik açın.\nOdun ateşinde veya 200 derece fırında 2 saat pişirin.\nServis sırasında testiyi kırarak yemeği sunun.",
        "id": "30",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TestiKebabGoreme.jpg/960px-TestiKebabGoreme.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Beyti Sarma",
        "category": "Ana Yemekler",
        "time": "60 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kebap",
            "Etli",
            "Lavaş"
        ],
        "ingredients": [
            {
                "name": "Kıyma",
                "measure": "500 gram"
            },
            {
                "name": "Lavaş",
                "measure": "4 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Salça",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Sarımsaklı Yoğurt",
                "measure": "1 kase"
            }
        ],
        "instructions": "Kıymayı baharatlarla yoğurup şişlere dizin ve ızgarada veya fırında pişirin.\nPişen kebapları lavaşlara sarıp dilimleyin.\nDilimleri fırın tepsisine dizip üzerine eritilmiş tereyağı gezdirin ve 10 dakika fırınlayın.\nÜzerine domates sosu ve yanında süzme yoğurt ile servis yapın.",
        "id": "31",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Meninges-en.svg/960px-Meninges-en.svg.png?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Kağıt Kebabı",
        "category": "Ana Yemekler",
        "time": "45 dk",
        "servings": "2 Kişilik",
        "tags": [
            "Antakya",
            "Etli",
            "Fırın"
        ],
        "ingredients": [
            {
                "name": "Kuzu Kıyma",
                "measure": "300 gram"
            },
            {
                "name": "Kapya Biber",
                "measure": "1 adet"
            },
            {
                "name": "Maydanoz",
                "measure": "Yarım demet"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            },
            {
                "name": "Karabiber",
                "measure": "1 çay kaşığı"
            }
        ],
        "instructions": "Kıymayı çok ince kıyılmış biber, maydanoz, sarımsak ve baharatlarla yoğurun.\nYağlı kağıt üzerine ince ve yuvarlak bir şekilde yayın.\nÜzerine domates ve biber dilimleri yerleştirin.\n200 derece fırında yaklaşık 25-30 dakika pişirin.",
        "id": "32",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vankahvalti.jpg/960px-Vankahvalti.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Ankara Tava",
        "category": "Ana Yemekler",
        "time": "90 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Ankara",
            "Etli",
            "Pilav"
        ],
        "ingredients": [
            {
                "name": "Kemikli Kuzu Eti",
                "measure": "1 kg"
            },
            {
                "name": "Arpa Şehriye",
                "measure": "2 su bardağı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Sivri Biber",
                "measure": "3 adet"
            },
            {
                "name": "Domates",
                "measure": "2 adet"
            }
        ],
        "instructions": "Etleri tencerede mühürleyip suyunu çekene kadar kavurun.\nÜzerini geçecek kadar su ekleyip etler yumuşayana kadar haşlayın.\nAyrı bir tavada tereyağı ile arpa şehriyeleri kavurun.\nŞehriyeleri fırın tepsisine yayın, üzerine haşlanmış etleri dizin.\nEtin suyundan ekleyip 200 derece fırında şehriyeler suyunu çekene kadar pişirin.",
        "id": "33",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/TAV_Airports_logo.svg/960px-TAV_Airports_logo.svg.png?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Su Böreği",
        "category": "Hamur İşleri",
        "time": "90 dk",
        "servings": "8 Kişilik",
        "tags": [
            "Börek",
            "Peynirli",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "5 su bardağı"
            },
            {
                "name": "Yumurta",
                "measure": "5 adet"
            },
            {
                "name": "Beyaz Peynir",
                "measure": "400 gram"
            },
            {
                "name": "Maydanoz",
                "measure": "Yarım demet"
            },
            {
                "name": "Tereyağı",
                "measure": "250 gram"
            }
        ],
        "instructions": "Yumurta ve un ile sert bir hamur yoğurun ve bezelere ayırın.\nBezeleri incecik açıp kaynar tuzlu suda 1 dakika haşlayın, ardından soğuk suya alın.\nYufkaları tepsiye aralarına eritilmiş tereyağı sürerek dizin.\nOrtasına peynirli maydanozlu harcı yayın.\nÖnceden ısıtılmış 180 derece fırında altı ve üstü kızarana kadar pişirin.",
        "id": "34",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Su_B%C3%B6re%C4%9Fi.JPG/960px-Su_B%C3%B6re%C4%9Fi.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Çiğ Börek",
        "category": "Hamur İşleri",
        "time": "40 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Eskişehir",
            "Kızartma",
            "Etli"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "3 su bardağı"
            },
            {
                "name": "Kıyma",
                "measure": "250 gram"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Su",
                "measure": "1 su bardağı"
            },
            {
                "name": "Tuz, Karabiber",
                "measure": "1 çay kaşığı"
            }
        ],
        "instructions": "Un, su ve tuz ile yumuşak bir hamur yoğurup bezelere ayırın.\nKıymayı rende soğan, tuz, karabiber ve yarım çay bardağı su ile sulandırarak harç hazırlayın.\nBezeleri tabak büyüklüğünde açın.\nİçine kıymalı harçtan ince bir tabaka sürüp yarım ay şeklinde kapatın.\nBol ve kızgın yağda arkalı önlü kızartın.",
        "id": "35",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Brikdish.jpg/960px-Brikdish.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Boyoz",
        "category": "Hamur İşleri",
        "time": "120 dk",
        "servings": "6 Kişilik",
        "tags": [
            "İzmir",
            "Hamur",
            "Kahvaltı"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "4 su bardağı"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "1 su bardağı"
            },
            {
                "name": "Su",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Tuz",
                "measure": "1 tatlı kaşığı"
            }
        ],
        "instructions": "Un, su ve tuzu yoğurarak elastik bir hamur elde edin.\nHamuru sıvı yağ içinde 1 saat dinlendirin.\nDinlenen hamuru tezgahta elinizle çekerek zar gibi incecik açın.\nRulo şeklinde sarıp gül böreği gibi dolayın.\nFırın tepsisine dizip 200 derecede nar gibi kızarana kadar pişirin.",
        "id": "36",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Boyoz_g%C3%B6sterim.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
    },
    {
        "title": "Gözleme",
        "category": "Hamur İşleri",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Pratik",
            "Peynirli",
            "Sac"
        ],
        "ingredients": [
            {
                "name": "Yufka",
                "measure": "3 adet"
            },
            {
                "name": "Kaşar Peyniri",
                "measure": "200 gram"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Yufkayı tezgaha serin ve ortasına rendelenmiş kaşar peynirini yayın.\nYufkanın kenarlarını zarf şeklinde katlayarak peynirin üzerini kapatın.\nIsıtılmış sacda veya geniş bir teflon tavada arkalı önlü pişirin.\nPişen gözlemelerin üzerine sıcakken tereyağı sürün ve sıcak servis yapın.",
        "id": "37",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Yufka-opening_the_dough.jpg/960px-Yufka-opening_the_dough.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Haşhaşlı Çörek",
        "category": "Hamur İşleri",
        "time": "60 dk",
        "servings": "8 Kişilik",
        "tags": [
            "Afyon",
            "Çörek",
            "Tatlı"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "4 su bardağı"
            },
            {
                "name": "Süt",
                "measure": "1 su bardağı"
            },
            {
                "name": "Haşhaş Ezmesi",
                "measure": "1 su bardağı"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "Yarım su bardağı"
            },
            {
                "name": "Şeker",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Ilık süt, maya, şeker ve unu yoğurarak mayalı bir hamur hazırlayın ve mayalanmaya bırakın.\nHaşhaş ezmesini sıvı yağ ile inceltin.\nMayalanan hamuru açıp üzerine haşhaşlı karışımı sürün.\nRulo yapıp dilimleyin ve tepsiye dizin.\nÜzerine yumurta sarısı sürüp 180 derece fırında pişirin.",
        "id": "38",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Poppy_seed_%C3%A7%C3%B6rek_from_Turkey.jpg/960px-Poppy_seed_%C3%A7%C3%B6rek_from_Turkey.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Kıymalı Pide",
        "category": "Hamur İşleri",
        "time": "60 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Pide",
            "Etli",
            "Fırın"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "3 su bardağı"
            },
            {
                "name": "Kıyma",
                "measure": "300 gram"
            },
            {
                "name": "Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Domates",
                "measure": "2 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "3 adet"
            }
        ],
        "instructions": "Hamur malzemeleriyle yumuşak bir hamur yoğurun ve mayalandırın.\nKıymayı çok ince doğranmış sebzelerle çiğden karıştırın.\nMayalanan hamuru oval ve uzun şekilde açın.\nOrtasına kıymalı harcı yayıp kenarlarını içe doğru katlayın.\nÖnceden ısıtılmış 220 derece fırında kenarları kızarana kadar pişirin.",
        "id": "39",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/T%C3%BCrkisches_Pide_mit_Hackfleisch_%28hier_Sojahack_und_Paprika%29.jpg/960px-T%C3%BCrkisches_Pide_mit_Hackfleisch_%28hier_Sojahack_und_Paprika%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
    },
    {
        "title": "Katmer",
        "category": "Hamur İşleri",
        "time": "45 dk",
        "servings": "2 Kişilik",
        "tags": [
            "Gaziantep",
            "Tatlı",
            "Fıstıklı"
        ],
        "ingredients": [
            {
                "name": "Baklavalık Yufka",
                "measure": "1 adet"
            },
            {
                "name": "Kaymak",
                "measure": "100 gram"
            },
            {
                "name": "Boz Fıstık",
                "measure": "1 çay bardağı"
            },
            {
                "name": "Toz Şeker",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "İncecik açılmış hamurun üzerine eritilmiş tereyağı sürün.\nOrtasına kaymak parçaları, bol antep fıstığı ve toz şeker serpin.\nZarf şeklinde katlayın.\nFırında veya geniş bir tavada tereyağı ile arkalı önlü kızartın.\nSıcakken üzerine fıstık serperek servis yapın.",
        "id": "40",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Simit_vendor_in_Istanbul.jpg/800px-Simit_vendor_in_Istanbul.jpg"
    },
    {
        "title": "Tepsi Mantısı",
        "category": "Hamur İşleri",
        "time": "75 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kayseri",
            "Fırın",
            "Etli"
        ],
        "ingredients": [
            {
                "name": "Un",
                "measure": "3 su bardağı"
            },
            {
                "name": "Kıyma",
                "measure": "300 gram"
            },
            {
                "name": "Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Et Suyu",
                "measure": "2 su bardağı"
            }
        ],
        "instructions": "Mantı hamurunu hazırlayıp ince şekilde açın ve kare kare kesin.\nKıymalı iç harç ile mantıları kapatın ancak bu sefer fırın tepsisine dik bir şekilde sıkıca dizin.\nÖnceden ısıtılmış 200 derece fırında mantıların üzeri kızarana kadar fırınlayın.\nFırından çıkan sıcak mantının üzerine sıcak et suyunu gezdirip çekmesini bekleyin.\nSarımsaklı yoğurt ve salçalı sos ile servis yapın.",
        "id": "41",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kayseri_mant%C4%B1s%C4%B1.jpg/800px-Kayseri_mant%C4%B1s%C4%B1.jpg"
    },
    {
        "title": "Gül Böreği",
        "category": "Hamur İşleri",
        "time": "45 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Börek",
            "Peynirli",
            "Pratik"
        ],
        "ingredients": [
            {
                "name": "Yufka",
                "measure": "4 adet"
            },
            {
                "name": "Beyaz Peynir",
                "measure": "300 gram"
            },
            {
                "name": "Süt",
                "measure": "1 su bardağı"
            },
            {
                "name": "Sıvı Yağ",
                "measure": "Yarım çay bardağı"
            }
        ],
        "instructions": "Yufkaları dörde bölerek üçgen parçalar elde edin.\nSüt ve sıvı yağı karıştırarak sos hazırlayın, yufkaların üzerine sürün.\nGeniş kısma peynir koyup rulo yapın ve kendi etrafında dolayarak gül şekli verin.\nTepsiye dizip üzerine kalan sosu ve yumurta sarısı sürün.\n180 derece fırında kızarana kadar pişirin.",
        "id": "42",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lahmacun_and_salad.jpg/800px-Lahmacun_and_salad.jpg"
    },
    {
        "title": "Beyran Çorbası",
        "category": "Çorbalar",
        "time": "120 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Gaziantep",
            "Etli",
            "Şifa"
        ],
        "ingredients": [
            {
                "name": "Kuzu İncik",
                "measure": "500 gram"
            },
            {
                "name": "Pirinç",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "İç Yağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Sarımsak",
                "measure": "4 diş"
            },
            {
                "name": "Pul Biber",
                "measure": "1 tatlı kaşığı"
            }
        ],
        "instructions": "Kuzu etini düdüklü tencerede iyice yumuşayana kadar haşlayın.\nHaşlanan etleri kemiklerinden ayırıp didikleyin.\nBakır bir sahana iç yağı, sarımsak ve pul biberi alıp kavurun.\nÜzerine haşlanmış pirinç ve didiklenmiş etleri ekleyin.\nSon olarak kaynar et suyunu döküp şiddetli ateşte bir taşım kaynatın ve sıcak servis yapın.",
        "id": "43",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yayla_%C3%A7orbas%C4%B1.jpg/800px-Yayla_%C3%A7orbas%C4%B1.jpg"
    },
    {
        "title": "Düğün Çorbası",
        "category": "Çorbalar",
        "time": "60 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Yöresel",
            "Etli",
            "Terbiyeli"
        ],
        "ingredients": [
            {
                "name": "Gerdan Eti",
                "measure": "500 gram"
            },
            {
                "name": "Yoğurt",
                "measure": "1 kase"
            },
            {
                "name": "Un",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Yumurta Sarısı",
                "measure": "1 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Gerdan etini iyice haşlayın ve didikleyin.\nEtin suyunu süzüp tencereye alın.\nBir kasede yoğurt, un ve yumurta sarısını çırparak terbiye hazırlayın.\nKaynayan et suyundan terbiyeye ekleyip ılıtın, ardından yavaşça tencereye ilave edin.\nDidiklenmiş etleri ekleyip kaynatın. Üzerine kırmızı biberli kızdırılmış tereyağı dökerek servis yapın.",
        "id": "44",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercimek_%C3%A7orbas%C4%B1.jpg/800px-Mercimek_%C3%A7orbas%C4%B1.jpg"
    },
    {
        "title": "Arabaşı Çorbası",
        "category": "Çorbalar",
        "time": "60 dk",
        "servings": "6 Kişilik",
        "tags": [
            "İç Anadolu",
            "Tavuklu",
            "Kış Çorbası"
        ],
        "ingredients": [
            {
                "name": "Bütün Tavuk",
                "measure": "Yarım adet"
            },
            {
                "name": "Un",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Salça",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Pul Biber",
                "measure": "1 tatlı kaşığı"
            }
        ],
        "instructions": "Tavuğu haşlayıp ince ince didikleyin.\nTencerede tereyağı ve unu kavurun. Salçayı ekleyip kokusu çıkana kadar kavurmaya devam edin.\nSoğuk su ekleyerek unu açın, ardından sıcak tavuk suyunu ilave edin.\nDidiklenmiş tavukları ve baharatları ekleyip kıvam alana kadar kaynatın.\nYanında özel arabaşı hamuru ile yutularak servis yapılır.",
        "id": "45",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ezogelin_soup%2C_bread%2C_and_water.jpg/800px-Ezogelin_soup%2C_bread%2C_and_water.jpg"
    },
    {
        "title": "Yüksük Çorbası",
        "category": "Çorbalar",
        "time": "45 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Adana",
            "Mantılı",
            "Nohutlu"
        ],
        "ingredients": [
            {
                "name": "Hazır Mantı",
                "measure": "1 su bardağı"
            },
            {
                "name": "Haşlanmış Nohut",
                "measure": "1 su bardağı"
            },
            {
                "name": "Domates Salçası",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Nane",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Et Suyu",
                "measure": "5 su bardağı"
            }
        ],
        "instructions": "Tencereye et suyunu alıp kaynatın.\nKaynayan suya mantı ve haşlanmış nohutları ilave edin.\nAyrı bir tavada tereyağı, salça ve naneyi kavurup sos hazırlayın.\nMantılar pişince sosu çorbaya ilave edin.\nBir taşım daha kaynatıp sıcak servis yapın.",
        "id": "46",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercimek_%C3%A7orbas%C4%B1.jpg/800px-Mercimek_%C3%A7orbas%C4%B1.jpg"
    },
    {
        "title": "Kelle Paça",
        "category": "Çorbalar",
        "time": "180 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Şifa",
            "Sakatat",
            "Sarımsaklı"
        ],
        "ingredients": [
            {
                "name": "Kuzu Kelle",
                "measure": "1 adet"
            },
            {
                "name": "Paça",
                "measure": "4 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "1 baş"
            },
            {
                "name": "Sirke",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Pul Biber",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Kelle ve paçaları iyice temizleyip düdüklü tencerede uzun süre haşlayın.\nHaşlanan etleri kemiklerinden ayırıp küçük küçük doğrayın ve süzülmüş et suyuna ekleyin.\nAyrı bir tavada tereyağı ve pul biberi kızdırıp çorbaya ekleyin.\nBol ezilmiş sarımsak ve sirke karışımını çorbanın yanında sunarak servis yapın.",
        "id": "47",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercimek_%C3%A7orbas%C4%B1.jpg/800px-Mercimek_%C3%A7orbas%C4%B1.jpg"
    },
    {
        "title": "Zeytinyağlı Barbunya",
        "category": "Zeytinyağlılar",
        "time": "50 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Zeytinyağlı",
            "Vegan",
            "Hafif"
        ],
        "ingredients": [
            {
                "name": "Taze Barbunya",
                "measure": "500 gram"
            },
            {
                "name": "Havuç",
                "measure": "1 adet"
            },
            {
                "name": "Patates",
                "measure": "1 adet"
            },
            {
                "name": "Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            }
        ],
        "instructions": "Barbunyaları hafifçe haşlayıp suyunu süzün.\nTencereye zeytinyağını alıp yemeklik doğranmış soğanı pembeleşene kadar kavurun.\nKüp doğranmış havuç ve patatesleri ekleyin.\nBarbunyaları, tuz, kesme şeker ve sıcak suyu ilave edip kısık ateşte pişirin.\nÜzerine maydanoz serperek soğuk servis yapın.",
        "id": "48",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Patl%C4%B1can_salatas%C4%B1.jpg/800px-Patl%C4%B1can_salatas%C4%B1.jpg"
    },
    {
        "title": "İmam Bayıldı",
        "category": "Zeytinyağlılar",
        "time": "60 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Patlıcan",
            "Zeytinyağlı",
            "Yöresel"
        ],
        "ingredients": [
            {
                "name": "Patlıcan",
                "measure": "4 adet"
            },
            {
                "name": "Kuru Soğan",
                "measure": "3 adet"
            },
            {
                "name": "Domates",
                "measure": "3 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "5 diş"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            }
        ],
        "instructions": "Patlıcanları alacalı soyup tuzlu suda bekletin, ardından hafifçe kızartın.\nSoğanları piyazlık doğrayıp bol zeytinyağında sarımsaklarla birlikte yumuşayana kadar kavurun.\nDoğranmış domatesleri ekleyip sos kıvamına getirin.\nPatlıcanların ortasını açıp harcı doldurun.\nTencereye dizip az su ile kısık ateşte pişirin. Soğuk servis yapın.",
        "id": "49",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vi%C5%9Fneli_Yaprak_Sarma.jpg/800px-Vi%C5%9Fneli_Yaprak_Sarma.jpg"
    },
    {
        "title": "Zeytinyağlı Taze Fasulye",
        "category": "Zeytinyağlılar",
        "time": "45 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Yaz Yemeği",
            "Vegan",
            "Hafif"
        ],
        "ingredients": [
            {
                "name": "Taze Fasulye",
                "measure": "500 gram"
            },
            {
                "name": "Domates",
                "measure": "3 adet"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Toz Şeker",
                "measure": "1 çay kaşığı"
            }
        ],
        "instructions": "Fasulyeleri ayıklayıp ortadan ikiye bölün.\nTencereye sırasıyla doğranmış soğan, fasulye ve küp doğranmış domatesleri kat kat dizin.\nZeytinyağı, tuz ve şekeri ekleyin.\nHiç su eklemeden, kısık ateşte fasulyeler kendi suyunu salıp çekene kadar pişirin.\nSoğuk servis yapın.",
        "id": "50",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dolma_%281%29.jpg/800px-Dolma_%281%29.jpg"
    },
    {
        "title": "Zeytinyağlı Kereviz",
        "category": "Zeytinyağlılar",
        "time": "40 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kış Yemeği",
            "Zeytinyağlı",
            "Portakallı"
        ],
        "ingredients": [
            {
                "name": "Kereviz",
                "measure": "2 adet"
            },
            {
                "name": "Portakal Suyu",
                "measure": "1 su bardağı"
            },
            {
                "name": "Havuç",
                "measure": "1 adet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Toz Şeker",
                "measure": "1 tatlı kaşığı"
            }
        ],
        "instructions": "Kerevizleri soyup kararmaması için limonlu suda bekletin.\nTencereye zeytinyağı ve doğranmış soğanları alıp kavurun.\nHavuçları ve dilimlenmiş kerevizleri ekleyin.\nTaze sıkılmış portakal suyu, tuz ve şekeri ilave edip kısık ateşte pişirin.\nKendi tenceresinde soğumaya bırakın.",
        "id": "51",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Patl%C4%B1can_salatas%C4%B1.jpg/800px-Patl%C4%B1can_salatas%C4%B1.jpg"
    },
    {
        "title": "Şakşuka",
        "category": "Zeytinyağlılar",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Meze",
            "Patlıcan",
            "Kızartma"
        ],
        "ingredients": [
            {
                "name": "Patlıcan",
                "measure": "3 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "3 adet"
            },
            {
                "name": "Domates",
                "measure": "4 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            }
        ],
        "instructions": "Patlıcan ve biberleri küp küp doğrayıp zeytinyağında kızartın ve havlu kağıt üzerine alın.\nAyrı bir tavada zeytinyağı, ezilmiş sarımsak ve rendelenmiş domatesleri kaynatarak yoğun bir sos elde edin.\nKızarmış sebzeleri servis tabağına alın.\nÜzerine hazırladığınız domates sosunu dökerek servis yapın.",
        "id": "52",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Patl%C4%B1can_salatas%C4%B1.jpg/800px-Patl%C4%B1can_salatas%C4%B1.jpg"
    },
    {
        "title": "Fava",
        "category": "Zeytinyağlılar",
        "time": "60 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Meze",
            "Bakla",
            "Vegan"
        ],
        "ingredients": [
            {
                "name": "Kuru İç Bakla",
                "measure": "2 su bardağı"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Dereotu",
                "measure": "Yarım demet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Limon",
                "measure": "Yarım adet"
            }
        ],
        "instructions": "Baklaları akşamdan ıslatın.\nTencerede iri doğranmış soğan, bakla ve suyu ekleyip baklalar tamamen ezilene kadar kaynatın.\nSuyunu çeken baklaları blenderdan geçirip püre haline getirin.\nİçine zeytinyağı, tuz, limon ve ince kıyılmış dereotunu ekleyip karıştırın.\nBir kaba döküp buzdolabında kalıp gibi donana kadar bekletin ve dilimleyerek servis yapın.",
        "id": "53",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Patl%C4%B1can_salatas%C4%B1.jpg/800px-Patl%C4%B1can_salatas%C4%B1.jpg"
    },
    {
        "title": "Zeytinyağlı Pırasa",
        "category": "Zeytinyağlılar",
        "time": "40 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kış",
            "Zeytinyağlı",
            "Havuçlu"
        ],
        "ingredients": [
            {
                "name": "Pırasa",
                "measure": "1 kg"
            },
            {
                "name": "Havuç",
                "measure": "2 adet"
            },
            {
                "name": "Pirinç",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Limon",
                "measure": "1 adet"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            }
        ],
        "instructions": "Pırasaları verev şekilde, havuçları ise halka halka doğrayın.\nTencereye zeytinyağını alıp havuçları hafifçe soteleyin.\nPırasaları ekleyip birkaç dakika kavurun.\nYıkanmış pirinç, limon suyu, tuz, şeker ve sıcak suyu ekleyin.\nPirinçler yumuşayana kadar kısık ateşte pişirin.",
        "id": "54",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Patl%C4%B1can_salatas%C4%B1.jpg/800px-Patl%C4%B1can_salatas%C4%B1.jpg"
    },
    {
        "title": "Zeytinyağlı Enginar",
        "category": "Zeytinyağlılar",
        "time": "40 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Enginar",
            "Vegan",
            "Hafif"
        ],
        "ingredients": [
            {
                "name": "Ayıklanmış Enginar",
                "measure": "4 adet"
            },
            {
                "name": "Garnitür",
                "measure": "1 kase"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Portakal Suyu",
                "measure": "1 su bardağı"
            },
            {
                "name": "Limon",
                "measure": "Yarım adet"
            }
        ],
        "instructions": "Enginar çanaklarını tencereye dizin.\nOrtalarına hazır garnitürü tepeleme doldurun.\nAyrı bir kapta zeytinyağı, portakal suyu, limon suyu ve şekeri karıştırıp enginarların üzerine dökün.\nKapağı kapalı olarak enginarlar yumuşayana kadar pişirin.\nÜzerine taze dereotu serperek soğuk servis yapın.",
        "id": "55",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dolma_%281%29.jpg/800px-Dolma_%281%29.jpg"
    },
    {
        "title": "Deniz Börülcesi",
        "category": "Zeytinyağlılar",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Ege",
            "Meze",
            "Zeytinyağlı"
        ],
        "ingredients": [
            {
                "name": "Deniz Börülcesi",
                "measure": "2 bağ"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Limon",
                "measure": "1 adet"
            }
        ],
        "instructions": "Deniz börülcelerini bol suda yıkayıp kaynar suda 15 dakika haşlayın.\nHaşlanan börülceleri soğuk suya alıp şoklayın.\nKök kısımlarından tutup çekerek kılçıklarını sıyırın.\nZeytinyağı, dövülmüş sarımsak ve bol limon suyu ile sos hazırlayın.\nBörülceleri bu sosla harmanlayıp servis yapın.",
        "id": "56",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vi%C5%9Fneli_Yaprak_Sarma.jpg/800px-Vi%C5%9Fneli_Yaprak_Sarma.jpg"
    },
    {
        "title": "Künefe",
        "category": "Tatlılar",
        "time": "30 dk",
        "servings": "2 Kişilik",
        "tags": [
            "Antakya",
            "Şerbetli",
            "Peynirli"
        ],
        "ingredients": [
            {
                "name": "Tel Kadayıf",
                "measure": "250 gram"
            },
            {
                "name": "Tuzsuz Antakya Peyniri",
                "measure": "150 gram"
            },
            {
                "name": "Tereyağı",
                "measure": "100 gram"
            },
            {
                "name": "Su",
                "measure": "1 su bardağı"
            },
            {
                "name": "Toz Şeker",
                "measure": "1 su bardağı"
            }
        ],
        "instructions": "Şeker ve suyu kaynatarak şerbeti hazırlayın ve soğumaya bırakın.\nKadayıfları incecik didikleyip eritilmiş tereyağı ile harmanlayın.\nKünefe tepsisinin tabanına kadayıfın yarısını iyice bastırarak döşeyin.\nÜzerine dilimlenmiş peynirleri yayın ve kalan kadayıfı ekleyip tekrar çok sıkı bastırın.\nOcak üzerinde tepsiyi çevire çevire her iki tarafını da kızartın ve ocaktan alır almaz soğuk şerbeti dökün.",
        "id": "57",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.jpg/800px-Baklava%281%29.jpg"
    },
    {
        "title": "Şöbiyet",
        "category": "Tatlılar",
        "time": "90 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Baklava",
            "Fıstıklı",
            "Şerbetli"
        ],
        "ingredients": [
            {
                "name": "Baklavalık Yufka",
                "measure": "15 adet"
            },
            {
                "name": "Süt",
                "measure": "2 su bardağı"
            },
            {
                "name": "İrmik",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Antep Fıstığı",
                "measure": "1 kase"
            },
            {
                "name": "Tereyağı",
                "measure": "150 gram"
            }
        ],
        "instructions": "Süt ve irmiği kaynatarak koyu bir kaymak (muhallebi) hazırlayın.\nYufkaları aralarına eritilmiş tereyağı sürerek üst üste dizin ve kareler halinde kesin.\nHer karenin ortasına bir kaşık irmik kaymağı ve bol fıstık koyup üçgen katlayın.\nTepsiye hafifçe üst üste binecek şekilde dizip kalan tereyağını gezdirin.\nKızarana kadar fırınlayın, fırından çıkınca soğuk şerbet dökün.",
        "id": "58",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/A%C5%9Fure_-_Noah%27s_Pudding.jpg/800px-A%C5%9Fure_-_Noah%27s_Pudding.jpg"
    },
    {
        "title": "Höşmerim",
        "category": "Tatlılar",
        "time": "40 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Balıkesir",
            "Peynir Tatlısı",
            "Yöresel"
        ],
        "ingredients": [
            {
                "name": "Tuzsuz Taze Peynir",
                "measure": "500 gram"
            },
            {
                "name": "İrmik",
                "measure": "1 su bardağı"
            },
            {
                "name": "Şeker",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Yumurta Sarısı",
                "measure": "1 adet"
            }
        ],
        "instructions": "Taze peyniri tencereye alıp kısık ateşte eritin.\nPeynir eriyince yumurta sarısını hızlıca ekleyip çırpın.\nİrmiği ilave edip peynirle birlikte irmikler şişene kadar kavurun.\nSon olarak şekeri ekleyin ve şeker eriyip tatlı sulanıp tekrar kıvam alana kadar pişirin.\nSıcak veya ılık olarak servis yapın.",
        "id": "59",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tavukg%C3%B6%C4%9Fsu_-_Chicken_Breast_Pudding_from_Turkey.jpg/800px-Tavukg%C3%B6%C4%9Fsu_-_Chicken_Breast_Pudding_from_Turkey.jpg"
    },
    {
        "title": "Kazandibi",
        "category": "Tatlılar",
        "time": "60 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Sütlü Tatlı",
            "Yanık",
            "Geleneksel"
        ],
        "ingredients": [
            {
                "name": "Süt",
                "measure": "1 litre"
            },
            {
                "name": "Şeker",
                "measure": "1 su bardağı"
            },
            {
                "name": "Pirinç Unu",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Nişasta",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Pudra Şekeri",
                "measure": "Tepsi altı için"
            }
        ],
        "instructions": "Süt, şeker, pirinç unu ve nişastayı tencereye alıp koyulaşana kadar pişirerek muhallebi yapın.\nAlüminyum bir tepsinin tabanına bolca pudra şekeri serpin.\nÜzerine hazırladığınız muhallebiden ince bir tabaka yayın ve tepsiyi ocağa alıp şekerin karamelize olup yanmasını sağlayın.\nTaban yanıp kokusu çıkınca kalan muhallebiyi tepsiye dökün.\nBuzdolabında soğuttuktan sonra rulo yaparak servis yapın.",
        "id": "60",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tavukg%C3%B6%C4%9Fsu_-_Chicken_Breast_Pudding_from_Turkey.jpg/800px-Tavukg%C3%B6%C4%9Fsu_-_Chicken_Breast_Pudding_from_Turkey.jpg"
    },
    {
        "title": "Revani",
        "category": "Tatlılar",
        "time": "50 dk",
        "servings": "8 Kişilik",
        "tags": [
            "Şerbetli",
            "İrmikli",
            "Kek"
        ],
        "ingredients": [
            {
                "name": "İrmik",
                "measure": "1 su bardağı"
            },
            {
                "name": "Un",
                "measure": "1 su bardağı"
            },
            {
                "name": "Yumurta",
                "measure": "3 adet"
            },
            {
                "name": "Yoğurt",
                "measure": "1 su bardağı"
            },
            {
                "name": "Şerbet",
                "measure": "3 bardak şeker/su"
            }
        ],
        "instructions": "Şeker ve suyu kaynatarak şerbeti hazırlayıp soğumaya bırakın.\nYumurta ve şekeri köpürene kadar çırpın, ardından yoğurt ve sıvı yağı ekleyin.\nİrmik, un, kabartma tozu ve vanilyayı ilave edip karıştırın.\nYağlanmış borcama döküp 180 derece fırında üzeri kızarana kadar pişirin.\nFırından çıkan sıcak kekin üzerine soğuk şerbeti dökün.",
        "id": "61",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.jpg/800px-Baklava%281%29.jpg"
    },
    {
        "title": "Keşkül",
        "category": "Tatlılar",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Sütlü Tatlı",
            "Bademli",
            "Hafif"
        ],
        "ingredients": [
            {
                "name": "Süt",
                "measure": "1 litre"
            },
            {
                "name": "Toz Şeker",
                "measure": "1 su bardağı"
            },
            {
                "name": "Toz Badem",
                "measure": "1 çay bardağı"
            },
            {
                "name": "Nişasta",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Pirinç Unu",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Süt, toz şeker, toz badem, nişasta ve pirinç ununu tencereye alın.\nÇırpıcıyla sürekli karıştırarak orta ateşte koyulaşıp kaynayana kadar pişirin.\nKaynayan keşkülü servis kaselerine paylaştırın.\nOda sıcaklığına geldikten sonra buzdolabında soğutun.\nÜzerine fıstık veya badem serperek servis yapın.",
        "id": "62",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/K%C3%BCnefe_1.jpg/800px-K%C3%BCnefe_1.jpg"
    },
    {
        "title": "Kemalpaşa Tatlısı",
        "category": "Tatlılar",
        "time": "30 dk",
        "servings": "6 Kişilik",
        "tags": [
            "Şerbetli",
            "Bursa",
            "Pratik"
        ],
        "ingredients": [
            {
                "name": "Kuru Kemalpaşa",
                "measure": "1 paket"
            },
            {
                "name": "Su",
                "measure": "3 su bardağı"
            },
            {
                "name": "Şeker",
                "measure": "3 su bardağı"
            },
            {
                "name": "Limon",
                "measure": "Birkaç damla"
            }
        ],
        "instructions": "Geniş bir tencereye su ve şekeri alıp kaynatın.\nKaynayan şerbete birkaç damla limon sıkın.\nKuru kemalpaşa tatlılarını şerbetin içine atın.\nTatlılar şerbeti çekip yumuşayana ve şişene kadar kısık ateşte pişirin.\nBuzdolabında soğuttuktan sonra kaymak veya tahin ile servis yapın.",
        "id": "63",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.jpg/800px-Baklava%281%29.jpg"
    },
    {
        "title": "Kabak Tatlısı",
        "category": "Tatlılar",
        "time": "90 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Kış",
            "Meyve Tatlısı",
            "Cevizli"
        ],
        "ingredients": [
            {
                "name": "Bal Kabağı",
                "measure": "1 kg"
            },
            {
                "name": "Toz Şeker",
                "measure": "2 su bardağı"
            },
            {
                "name": "Ceviz İçi",
                "measure": "1 kase"
            },
            {
                "name": "Tahin",
                "measure": "Üzeri için"
            }
        ],
        "instructions": "Kabakları dilimleyip temizleyin ve geniş bir tencereye dizin.\nÜzerine toz şekeri gezdirin ve kapağını kapatıp en az 3-4 saat (vaktiniz varsa 1 gece) kendi suyunu salması için bekletin.\nSuyunu salan kabakları hiç su eklemeden kısık ateşte yumuşayana kadar pişirin.\nŞerbetini çekip parlak bir görünüm alınca ocaktan alın.\nSoğuduktan sonra tahin ve ceviz dökerek servis yapın.",
        "id": "64",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/K%C3%BCnefe_1.jpg/800px-K%C3%BCnefe_1.jpg"
    },
    {
        "title": "Trileçe",
        "category": "Tatlılar",
        "time": "60 dk",
        "servings": "8 Kişilik",
        "tags": [
            "Sütlü Tatlı",
            "Karamelli",
            "Balkan"
        ],
        "ingredients": [
            {
                "name": "Yumurta",
                "measure": "5 adet"
            },
            {
                "name": "Şeker",
                "measure": "1 su bardağı"
            },
            {
                "name": "Un",
                "measure": "1.5 su bardağı"
            },
            {
                "name": "Sütlü Sos",
                "measure": "3 bardak süt, krema"
            },
            {
                "name": "Karamel",
                "measure": "1 kase"
            }
        ],
        "instructions": "Yumurta ve şekeri köpürene kadar çırpın, unu ekleyip pandispanya hazırlayın ve fırında pişirin.\nSüt, krema ve çok az şekeri karıştırarak sütlü şerbeti hazırlayın.\nPişen kekin üzerine delikler açıp soğuk sütlü şerbeti dökün.\nKek sütü tamamen çekince üzerine ince bir tabaka krem şanti sürün.\nEn üste hazırladığınız veya hazır aldığınız karamel sosunu gezdirip soğuk servis yapın.",
        "id": "65",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg/800px-S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg"
    },
    {
        "title": "Haydari",
        "category": "Başlangıçlar",
        "time": "15 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Meze",
            "Yoğurtlu",
            "Soğuk"
        ],
        "ingredients": [
            {
                "name": "Süzme Yoğurt",
                "measure": "2 su bardağı"
            },
            {
                "name": "Beyaz Peynir",
                "measure": "1 dilim"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            },
            {
                "name": "Dereotu",
                "measure": "Çeyrek demet"
            },
            {
                "name": "Tereyağı",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Kuru Nane",
                "measure": "1 tatlı kaşığı"
            }
        ],
        "instructions": "Tereyağında kuru naneyi kokusu çıkana kadar hafifçe yakın ve soğumaya bırakın.\nSüzme yoğurdun içine ezilmiş beyaz peynir ve dövülmüş sarımsakları ekleyin.\nİnce kıyılmış dereotunu ve soğumuş naneli tereyağını ilave edin.\nTüm malzemeleri iyice karıştırın ve servis tabağına alıp üzerini zeytinyağı ile süsleyin.",
        "id": "66",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hummus_with_pine_nuts.jpg/800px-Hummus_with_pine_nuts.jpg"
    },
    {
        "title": "Muhammara",
        "category": "Başlangıçlar",
        "time": "20 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Antakya",
            "Cevizli",
            "Acılı"
        ],
        "ingredients": [
            {
                "name": "Biber Salçası",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Domates Salçası",
                "measure": "1 yemek kaşığı"
            },
            {
                "name": "Ceviz İçi",
                "measure": "1 su bardağı"
            },
            {
                "name": "Galeta Unu",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            }
        ],
        "instructions": "Cevizleri dişe gelecek şekilde dövün veya robottan geçirin.\nBir kasede salçaları, ezilmiş sarımsağı, zeytinyağını, galeta ununu ve cevizleri karıştırın.\nİçine kimyon, pul biber, az miktarda nar ekşisi ekleyip yoğurur gibi iyice harmanlayın.\nKıvamı çok koyu olursa biraz daha zeytinyağı ile açabilirsiniz.\nServis tabağına alıp üzerine ceviz koyarak servis yapın.",
        "id": "67",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%C3%87i%C4%9F_k%C3%B6fte.jpg/800px-%C3%87i%C4%9F_k%C3%B6fte.jpg"
    },
    {
        "title": "Babagannuş",
        "category": "Başlangıçlar",
        "time": "30 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Hatay",
            "Patlıcan",
            "Köz"
        ],
        "ingredients": [
            {
                "name": "Közlenmiş Patlıcan",
                "measure": "3 adet"
            },
            {
                "name": "Közlenmiş Kapya Biber",
                "measure": "2 adet"
            },
            {
                "name": "Közlenmiş Domates",
                "measure": "1 adet"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            },
            {
                "name": "Zeytinyağı",
                "measure": "3 yemek kaşığı"
            },
            {
                "name": "Nar Ekşisi",
                "measure": "1 yemek kaşığı"
            }
        ],
        "instructions": "Patlıcan, biber ve domatesleri közleyip kabuklarını soyun.\nSebzeleri bıçakla ince ince kıyarak ezme haline getirin.\nİçine ezilmiş sarımsak, tuz, zeytinyağı ve nar ekşisini ekleyin.\nTüm malzemeleri güzelce harmanlayın.\nServis tabağına yayıp üzerine maydanoz serperek sunun.",
        "id": "68",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%C3%87i%C4%9F_k%C3%B6fte.jpg/800px-%C3%87i%C4%9F_k%C3%B6fte.jpg"
    },
    {
        "title": "Atom",
        "category": "Başlangıçlar",
        "time": "15 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Acı",
            "Meze",
            "Yoğurtlu"
        ],
        "ingredients": [
            {
                "name": "Süzme Yoğurt",
                "measure": "2 su bardağı"
            },
            {
                "name": "Sarımsak",
                "measure": "2 diş"
            },
            {
                "name": "Arnavut Biberi (Kuru)",
                "measure": "5 adet"
            },
            {
                "name": "Tereyağı",
                "measure": "2 yemek kaşığı"
            },
            {
                "name": "Zeytinyağı",
                "measure": "1 yemek kaşığı"
            }
        ],
        "instructions": "Süzme yoğurdu ezilmiş sarımsak ve az tuz ile çırparak pürüzsüz hale getirin ve servis tabağına yayın.\nTavada tereyağı ve zeytinyağını ısıtın.\nİçine küçük doğranmış kurutulmuş Arnavut biberlerini (acı biberleri) atıp biberlerin rengi yağa çıkana kadar kavurun.\nBiberli sıcak yağı sarımsaklı yoğurdun üzerine gezdirin.\nKızarmış ekmekle birlikte servis yapın.",
        "id": "69",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cac%C4%B1k.jpg/800px-Cac%C4%B1k.jpg"
    },
    {
        "title": "Gavurdağı Ezmesi",
        "category": "Başlangıçlar",
        "time": "15 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Antep",
            "Salata",
            "Cevizli"
        ],
        "ingredients": [
            {
                "name": "Domates",
                "measure": "3 adet"
            },
            {
                "name": "Kuru Soğan",
                "measure": "1 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "2 adet"
            },
            {
                "name": "Maydanoz",
                "measure": "Yarım demet"
            },
            {
                "name": "Ceviz İçi",
                "measure": "1 çay bardağı"
            },
            {
                "name": "Nar Ekşisi",
                "measure": "Bolca"
            }
        ],
        "instructions": "Domatesleri, soğanları ve biberleri tıpkı ezme gibi çok ama çok ince, minik minik doğrayın (robottan çekmeyin, bıçakla kıyın).\nİnce kıyılmış maydanoz ve iri dövülmüş cevizi ekleyin.\nBolca nar ekşisi, sızma zeytinyağı, tuz ve sumak ilave edin.\nTüm malzemeyi ezmeden nazikçe karıştırın.\nServis tabağına alıp üzerine tekrar ceviz serpiştirerek sunun.",
        "id": "70",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%C3%87i%C4%9F_k%C3%B6fte.jpg/800px-%C3%87i%C4%9F_k%C3%B6fte.jpg"
    },
    {
        "title": "Tarator",
        "category": "Başlangıçlar",
        "time": "15 dk",
        "servings": "4 Kişilik",
        "tags": [
            "Cevizli",
            "Sos",
            "Meze"
        ],
        "ingredients": [
            {
                "name": "Bayat Ekmek İçi",
                "measure": "2 dilim"
            },
            {
                "name": "Ceviz İçi",
                "measure": "1 su bardağı"
            },
            {
                "name": "Sarımsak",
                "measure": "3 diş"
            },
            {
                "name": "Zeytinyağı",
                "measure": "Yarım çay bardağı"
            },
            {
                "name": "Limon Suyu",
                "measure": "2 yemek kaşığı"
            }
        ],
        "instructions": "Bayat ekmek içlerini çok az suyla ıslatıp suyunu iyice sıkın.\nMutfak robotuna ekmek içlerini, cevizleri, ezilmiş sarımsakları ekleyin.\nZeytinyağı, limon suyu ve tuzu ilave edip robottan geçirerek pürüzsüz bir sos elde edin.\nKıvamı çok koyuysa çok az su veya zeytinyağı ile açabilirsiniz.\nÖzellikle kalamar, midye gibi deniz ürünlerinin yanında veya kızarmış ekmekle servis yapın.",
        "id": "71",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cac%C4%B1k.jpg/800px-Cac%C4%B1k.jpg"
    },
    {
        "id": "20",
        "title": "Etli Kuru Fasulye",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kuru_fasulye.jpg/960px-Kuru_fasulye.jpg",
        "time": "60 dk",
        "servings": "4 Ki�ilik",
        "tags": [
            "Geleneksel",
            "Sulu Yemek",
            "Etli"
        ],
        "ingredients": [
            {
                "name": "Kuru Fasulye",
                "measure": "2 su barda��"
            },
            {
                "name": "Ku�ba�� Et",
                "measure": "300 gram"
            },
            {
                "name": "Kuru So�an",
                "measure": "1 adet"
            },
            {
                "name": "Domates Sal�as�",
                "measure": "1 yemek ka����"
            },
            {
                "name": "Biber Sal�as�",
                "measure": "1 tatl� ka����"
            },
            {
                "name": "S�v� Ya�",
                "measure": "3 yemek ka����"
            },
            {
                "name": "Tuz, Karabiber",
                "measure": "G�z karar�"
            }
        ],
        "instructions": "Fasulyeleri bir gece �nceden �slat�n.\\nEti tencerede suyunu sal�p �ekene kadar kavurun.\\nSo�anlar� yemeklik do�ray�p s�v� ya� ile birlikte etin �zerine ekleyin ve pembele�ene kadar kavurun.\\nSal�alar� ekleyip kokusu ��kana kadar kavurmaya devam edin.\\nS�zd���n�z fasulyeleri tencereye al�n, �zerini 2-3 parmak ge�ecek kadar s�cak su, tuz ve karabiber ilave edin.\\nD�d�kl� tencerede yakla��k 30-40 dakika, normal tencerede ise fasulyeler yumu�ayana kadar pi�irin. Yan�nda pilav ile servis yap�n."
    },
    {
        "id": "21",
        "title": "Lahmacun (Ev Usul�)",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lahmacun_in_a_restaurant.jpg/960px-Lahmacun_in_a_restaurant.jpg",
        "time": "45 dk",
        "servings": "6 Adet",
        "tags": [
            "F�r�n",
            "Geleneksel",
            "Etli"
        ],
        "ingredients": [
            {
                "name": "K�yma",
                "measure": "300 gram (Orta ya�l�)"
            },
            {
                "name": "So�an",
                "measure": "2 adet"
            },
            {
                "name": "Domates",
                "measure": "2 adet"
            },
            {
                "name": "Sivri Biber",
                "measure": "2 adet"
            },
            {
                "name": "Maydanoz",
                "measure": "Yar�m demet"
            },
            {
                "name": "Biber Sal�as�",
                "measure": "1 yemek ka����"
            },
            {
                "name": "S�v� Ya�",
                "measure": "Yar�m �ay barda��"
            },
            {
                "name": "Haz�r Yufka veya Lava�",
                "measure": "6 adet (Pratik i�in)"
            }
        ],
        "instructions": "So�an, domates, biber ve maydanozu mutfak robotundan �ok ince olacak �ekilde ge�irin.\\n�ekti�iniz sebzeleri k�yma, s�v� ya�, sal�a ve baharatlarla (tuz, karabiber, pul biber, isot) geni� bir kapta iyice yo�urun.\\nHarc�n�z�n s�r�lebilir k�vamda olmas� i�in gerekirse �ok az su ekleyin.\\nF�r�n tepsisine dizdi�iniz lava� veya hamur bezelerinin �zerine harc� ince bir tabaka halinde yay�n.\\n�nceden �s�t�lm�� 220 derece f�r�nda kenarlar� k�zarana kadar pi�irin.\\nS�cakken aras�na bol ye�illik ve limon s�karak servis yap�n."
    },
    {
        "id": "22",
        "title": "H�nkar Be�endi",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/H%C3%BCnkar_be%C4%9Fendi_2.jpg/960px-H%C3%BCnkar_be%C4%9Fendi_2.jpg",
        "time": "60 dk",
        "servings": "4 Ki�ilik",
        "tags": [
            "Saray Mutfa��",
            "Etli",
            "Patl�canl�"
        ],
        "ingredients": [
            {
                "name": "Ku�ba�� Et",
                "measure": "400 gram"
            },
            {
                "name": "So�an",
                "measure": "1 adet"
            },
            {
                "name": "Sal�a",
                "measure": "1 yemek ka����"
            },
            {
                "name": "Patl�can",
                "measure": "4 adet (K�zlenmi�)"
            },
            {
                "name": "Tereya��",
                "measure": "2 yemek ka����"
            },
            {
                "name": "Un",
                "measure": "2 yemek ka����"
            },
            {
                "name": "S�t",
                "measure": "1,5 su barda��"
            },
            {
                "name": "Ka�ar Peyniri",
                "measure": "Yar�m su barda�� (Rendelenmi�)"
            }
        ],
        "instructions": "�nce tas kebab�n� haz�rlay�n: Etleri tencerede suyunu �ekene kadar kavurun, so�an� ekleyip kavurmaya devam edin. Sal�a, tuz, karabiber ve �zerini ge�ecek kadar s�cak su ekleyip etler yumu�ayana kadar pi�irin.\\nBe�endi k�sm� i�in: Patl�canlar� k�zleyip kabuklar�n� soyun ve ince ince do�ray�n.\\nBa�ka bir tencerede tereya��n� eritip unu kokusu ��kana kadar kavurun.\\nKavrulan una s�rekli kar��t�rarak so�uk s�t� ekleyin. K�vam al�nca i�ine k�zlenmi� patl�canlar�, tuzu ve karabiberi ilave edip kar��t�r�n.\\nEn son ka�ar peynirini ekleyip eriyene kadar kar��t�r�n ve ocaktan al�n.\\nServis taba��na �nce be�endiyi yay�n, �zerine haz�rlad���n�z etli yeme�i ekleyerek servis yap�n."
    },
    {
        "id": "23",
        "title": "Ali Nazik",
        "category": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alinazik_kebab%C4%B1.jpg/960px-Alinazik_kebab%C4%B1.jpg",
        "time": "40 dk",
        "servings": "3 Ki�ilik",
        "tags": [
            "Geleneksel",
            "Etli",
            "Yo�urtlu"
        ],
        "ingredients": [
            {
                "name": "K�yma",
                "measure": "300 gram"
            },
            {
                "name": "So�an",
                "measure": "1 adet"
            },
            {
                "name": "Patl�can",
                "measure": "3 adet (K�zlenmi�)"
            },
            {
                "name": "S�zme Yo�urt",
                "measure": "1,5 su barda��"
            },
            {
                "name": "Sar�msak",
                "measure": "2 di�"
            },
            {
                "name": "Tereya��",
                "measure": "2 yemek ka����"
            },
            {
                "name": "Pul biber",
                "measure": "1 tatl� ka����"
            }
        ],
        "instructions": "K�ymay� ve ince do�ranm�� so�an� bir tavada kavurun. Tuz, karabiber ve pul biber ekleyip ocaktan al�n.\\nPatl�canlar� k�zleyip kabuklar�n� soyun, ince ince do�ray�n.\\nSar�msaklar� ezip s�zme yo�urt ile kar��t�r�n, i�ine biraz tuz ekleyin.\\nK�zlenmi� patl�canlar� ezilmi� sar�msakl� yo�urt ile geni� bir kasede iyice kar��t�r�n.\\nServis taba��n�n taban�na yo�urtlu patl�canl� kar���m� yay�n.\\n�zerine kavrulmu� k�ymal� harc� d�k�n.\\nEn �ste tereya��nda k�zd�r�lm�� pul biber gezdirerek s�cak servis yap�n."
    },
    {
        "id": "24",
        "title": "Baklava (Cevizli)",
        "category": "Tatl�lar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.jpg/960px-Baklava%281%29.jpg",
        "time": "90 dk",
        "servings": "10 Ki�ilik",
        "tags": [
            "�erbetli",
            "Geleneksel",
            "Bayram"
        ],
        "ingredients": [
            {
                "name": "Baklaval�k Yufka",
                "measure": "1 paket (Haz�r)"
            },
            {
                "name": "Ceviz ��i",
                "measure": "2 su barda�� (�ekilmi�)"
            },
            {
                "name": "Tereya��",
                "measure": "250 gram (Eritilmi�)"
            },
            {
                "name": "�eker",
                "measure": "3 su barda�� (�erbet i�in)"
            },
            {
                "name": "Su",
                "measure": "3 su barda�� (�erbet i�in)"
            },
            {
                "name": "Limon",
                "measure": "1 dilim"
            }
        ],
        "instructions": "�ncelikle �erbet i�in su ve �ekeri tencereye al�n, kaynamaya ba�lay�nca limonu ekleyip 15 dakika k�s�k ate�te kaynat�n. Ard�ndan so�umaya b�rak�n.\\nTereya��n� k�s�k ate�te eritin, �zerindeki k�p�kleri (tortuyu) mutlaka al�n (baklavan�n �zerinde siyah noktalar olmamas� i�in).\\nF�r�n tepsisini ya�lay�n, yufkalar�n yar�s�n� aralar�na f�r�ayla eritilmi� tereya�� s�rerek �st �ste dizin.\\nOrtas�na �ekilmi� cevizi bolca serpi�tirin.\\nKalan yufkalar� da ayn� �ekilde aralar�n� ya�layarak �st �ste dizin.\\nBaklavay� istedi�iniz �ekilde dilimleyin (kare veya havu� dilimi) ve kalan tereya��n� �zerine gezdirin.\\n�nceden �s�t�lm�� 180 derece f�r�nda �zeri ve alt� nar gibi k�zarana kadar (yakla��k 45-50 dakika) pi�irin.\\nF�r�ndan ��kan s�cak baklavan�n �zerine so�uk �erbeti d�k�n. En az 2-3 saat dinlendirdikten sonra servis yap�n."
    },
    {
        "id": "25",
        "title": "�i� K�fte (Etsiz)",
        "category": "Ba�lang��lar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%C3%87i%C4%9F_k%C3%B6fte_2.jpg/960px-%C3%87i%C4%9F_k%C3%B6fte_2.jpg",
        "time": "40 dk",
        "servings": "6 Ki�ilik",
        "tags": [
            "Y�resel",
            "Pratik",
            "Etsiz",
            "Ac�"
        ],
        "ingredients": [
            {
                "name": "Esmer �nce Bulgur",
                "measure": "2,5 su barda��"
            },
            {
                "name": "S�cak Su",
                "measure": "1,5 su barda�� (Islatmak i�in)"
            },
            {
                "name": "So�an",
                "measure": "1 adet"
            },
            {
                "name": "Sar�msak",
                "measure": "3 di�"
            },
            {
                "name": "Domates Sal�as�",
                "measure": "2 yemek ka����"
            },
            {
                "name": "Biber Sal�as�",
                "measure": "3 yemek ka����"
            },
            {
                "name": "�sot",
                "measure": "3 yemek ka����"
            },
            {
                "name": "S�v� Ya� / Zeytinya��",
                "measure": "1 �ay barda��"
            },
            {
                "name": "Nar Ek�isi",
                "measure": "3 yemek ka����"
            },
            {
                "name": "Limon",
                "measure": "1 adet"
            },
            {
                "name": "Tuz, Kimyon, Karabiber",
                "measure": "G�z karar�"
            }
        ],
        "instructions": "Bulguru geni� bir yo�urma tepsisine al�n, �zerine s�cak suyu ekleyip �zerini kapat�n ve 15 dakika �i�mesini bekleyin.\\nBu s�rada so�an ve sar�msaklar� �ok ince rendeleyin (so�an�n suyunu s�karak ac�s�n� al�n).\\n�i�en bulgurun �zerine rendelenmi� so�an, sar�msak, sal�alar, isot ve baharatlar� ekleyin.\\nYakla��k 20-25 dakika boyunca bulgurlar tamamen ezilip macun k�vam�na gelene kadar yo�urun.\\nK�vam alan k�fteye ya�, nar ek�isi ve limon suyunu ekleyip 5-10 dakika daha yo�urun.\\nElinizle par�alar kopar�p s�karak �ekil verin.\\nMarul, limon ve nar ek�isi ile servis yap�n."
    }
];

const appCategories = [
    {
        "id": "cat1",
        "name": "Ana Yemekler",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg"
    },
    {
        "id": "cat2",
        "name": "Çorbalar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ezogelin_soup%2C_bread%2C_and_water.jpg/960px-Ezogelin_soup%2C_bread%2C_and_water.jpg"
    },
    {
        "id": "cat3",
        "name": "Zeytinyağlılar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vi%C5%9Fneli_Yaprak_Sarma.jpg/960px-Vi%C5%9Fneli_Yaprak_Sarma.jpg"
    },
    {
        "id": "cat4",
        "name": "Hamur İşleri",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg"
    },
    {
        "id": "cat5",
        "name": "Tatlılar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg/960px-S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg"
    },
    {
        "id": "cat6",
        "name": "Başlangıçlar",
        "image": "https://www.themealdb.com/images/media/meals/gpon5u1763801180.jpg"
    }
];
