import { MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources =(ir:MatIconRegistry, ds:DomSanitizer)=>{
    const days = [1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31];
    const imgDir ='assets/img';
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    ir.addSvgIcon('github',ds.bypassSecurityTrustResourceUrl('assets/social_github.svg'));
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl('assets/month.svg'));
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl('assets/weekly.svg'));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl('assets/project-setting.svg'));
    ir.addSvgIcon('project',ds.bypassSecurityTrustResourceUrl('assets/project.svg'));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl('assets/Days.svg'));
    ir.addSvgIcon('heaven',ds.bypassSecurityTrustResourceUrl('assets/heaven.jpg'));
    ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));

    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`))


    
    days.forEach(day=>{
        ir.addSvgIcon(`${day}`,ds.bypassSecurityTrustResourceUrl(`assets/day${day}.svg`));

    });
}

//我们在这个svg类里面导出了一个注册好的svg的名称，但是如果是直接拿到其他组件里的去导入，然后使用其实还是挺不方便的，
//还是存在重复导入的问题，所以我们可以导入到core.module.ts类里面的constructor里，其他模块就可以直接拿去使用了