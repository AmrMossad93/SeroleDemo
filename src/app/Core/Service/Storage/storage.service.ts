import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  async setStorage(key: string, value: string) {
    await Preferences.set({
      key,
      value,
    });
  }

  async getStorage(key: string): Promise<any> {
    return await Preferences.get({key});
  }

  async removeStorage(key: string) {
    await Preferences.remove({key});
  }
}
