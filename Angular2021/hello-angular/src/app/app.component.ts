//import { Product_listComponent } from './components/product_list/product_list.component';
import { Product } from './common/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  product :Product =  {
    name: 'S21',
    quantity: 200,
    price: 500
  }

public persons =  [
    {name_employee: 'Phát', position: 'Junior BA', salary: 1000},
    {name_employee: 'Linh', position: 'PM', salary: 2000},
    {name_employee: 'Tuấn', position: 'Dev', salary: 1000},
    {name_employee: 'Hà', position: 'Tester', salary: 4000}
];
public districts: string[] = ['Quận Huyện'];

public vietNamData =  [
  {
    city: 'Chọn thành phố',
    district: ['Quận Huyện']
  },
  {
    city: 'Nam Định',
    district: [
    'Thành phố Nam Định',
    'Huyện Xuân Trường',
    'HUyện Mỹ Lộc',
    'Huyện Vụ Bản',
    'Huyện Ý Yên',
    'Huyện Nam Trực',
    'Huyện Trực Ninh',
    'Huyện Giao Thủy',
    'Huyện Nghĩa Hưng'
    ],
  },
  {
    city: 'Hà Nội',
    district: [
      "Quận Ba Đình",
      "Huyện Ba Vì",
      "Quận Bắc Từ Liêm",
      "Quận Cầu Giấy",
      "Huyện Chương Mỹ",
      "Huyện Đan Phượng",
      "Huyện Đông Anh",
      "Quận Đống Đa",
      "Huyện Gia Lâm",
      "Quận Hà Đông",
      "Quận Hai Bà Trưng",
      "Huyện Hoài Đức",
      "Quận Hoàn Kiếm",
      "Quận Hoàng Mai",
      "Quận Long Biên",
      "Huyện Mê Linh",
      "Huyện Mỹ Đức",
      "Quận Nam Từ Liêm","Huyện Phú Xuyên","Huyện Phúc Thọ","Huyện Quốc Oai","Huyện Sóc Sơn","Thị xã Sơn Tây","Quận Tây Hồ","Huyện Thạch Thất","Huyện Thanh Oai","Huyện Thanh Trì","Quận Thanh Xuân","Huyện Thường Tín","Huyện Ứng Hòa"
    ],
  },
];

  constructor() {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Nhân viên =',this.persons);
    console.log('Thành phố = ',this.vietNamData);
  }

  public changeCity ( event : any ): void {
    const city = event.target.value;
    console.log('event', city);

    const search = this.vietNamData.filter((data) => data.city === city);
    console.log('search', search);

    if (!city) {
      return;
    }

    // cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts =
      this.vietNamData.find((data) => data.city === city)?.district || [];
  }

}
