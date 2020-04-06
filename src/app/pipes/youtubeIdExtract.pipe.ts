import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'youtubeIdExtract'
})

export class YoutubeIdExtractPipe implements PipeTransform {
  constructor() {

  }

  transform(url): string {
    let video_id = url.split('v=')[1];
    let ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    return url.match(video_id);
  }
}
