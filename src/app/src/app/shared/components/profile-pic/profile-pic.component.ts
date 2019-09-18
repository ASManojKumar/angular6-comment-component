import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent {

  @Input() imageUrl: string;
  @Input() imageSize: string;
  @Input() name: string;
  @ViewChild('profile_image_ref', { static: false }) el: ElementRef;
  // once global utility is ready we'll move it there
  private COLORS_ARRAY = ['#2EA1F8', '#FF9600', '#2BB415', '#B698EE', '#76E0B7', '#B8E986', '#F5EA5E', '#9D5617', '#F8BC1C', '#D0021B', '#6EB9E2', '#9D57DB', '#C955E1', '#069E7C', '#D92777', '#F3586B'];
  public size_class = 'circle-';
  ngOnInit() {
    this.genrateProfilePic();
  };
  /* Extract Letters form Name */
  getLetters(name: string) {
    let name_array = name.toLowerCase().split(' ');
    let first_letter = name_array[0].charAt(0);
    return (name_array.length - 1 === 0 ? first_letter : first_letter + name_array[name_array.length - 1].charAt(0));
  };
  backgroundColor(name: string) {
    let selected_index = name.length % this.COLORS_ARRAY.length;
    return this.COLORS_ARRAY[selected_index];
  };
  genrateProfilePic() {
    if (this.imageUrl) {
      this.el.nativeElement.style['background-image'] = 'url(' + this.imageUrl + ')';
      this.el.nativeElement.innerText = '';
    } else if (this.name) {
      this.el.nativeElement.style['background-image'] = '';
      this.el.nativeElement.innerText = this.getLetters(this.name);
      this.el.nativeElement.style['background-color'] = this.backgroundColor(this.name);
    }
    this.size_class = 'circle-' + this.imageSize;
  }

}
