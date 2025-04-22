!Her birinde başlık açılacak!

1-Yapılan her şeyi clik ile console yazdır
2-chechBox  (+)
3-InputGroup (+)
4-InputMask(+)
5-ListBox (+)
6-Password (+)
7-RadioButton(-)
8-Select(+)
9-ToogleSwitch(+)
10-Button(icon only)(+)
11-Table-pagination(+)
11-ve filter  (-)
11-Table row (+)
12-card(+)
13-DatePicker(icon)(+)
13-DatePicker(Time)(+)
13-fiealset(PrimeNg de bulamadım)
14-panel(+)
15-Tabs(+)
16-ConfirmDialog(-)
17-Dialog(+)
18-Upload(En son)
19-chart-js (+)
20-ToastBasic(+)
21-ToastSeverity(+)

--Butonlarla yap, üsüteni geleince buto kırmızı olsun, style de vers
--companent üretme
ng g component [Component Adı]
->Servis üretme
ng g s city-service

1.adım ng g c compannate adımı ile compananet üret
2.adım app-routing-module-ts de routuing tanımlamaları yap
3.hrefte link yerlerine path yazılır

Kütüphaneler:
->npm install axios

-->Günün ödevi:
1-Backend kısmında tüm controllerdeki metotlar için log yazılacak.log.info("şehir listesi çekildi"); (+)
2-Unit(Birimleri) City ile aynı şekilde oluştur
3-+ butpnu en sağa yaslanacak
bunların hepsi unitte de olacak

--> Günün görevleri
1-Backend Tüm servisler için BaseResponse yazılacak (+)
2-Data da her satırın sonunda birer buton olacak. Güncelleme(pencil) ve silme butonları(trash)-->(PrimeNg de Table companentş içinde column başlığı)
3-Backendte save için city adı ve namesi boş geçilmeyecek. BaseResponse uyarı verecek. Ardından onu fornten de catch bloğu içine ekle
4-İstenlen özellikler yoksa kayıt gerçekleşmesin 
