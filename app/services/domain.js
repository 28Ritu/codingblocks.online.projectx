import Service from '@ember/service'
import { computed } from '@ember/object';
import env from 'codingblocks-online/config/environment'

export default class DomainService extends Service {
    
  domain = window.location.hostname.indexOf("hello") == -1 ?  "cb": "hellointern"
  
  @computed('domain')
  get isExternal () {
    return this.domain == 'hellointern'
  }
  
  @computed('domain')
  get domainBasedPublicUrl() {
    return this.isExternal ? `https://${this.domain}.codingblocks.com` : env.publicUrl
  }

}