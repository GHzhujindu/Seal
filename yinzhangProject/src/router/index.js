import Vue from 'vue'
const _import = require("@common/import.js");
import HelloWorld from '@/components/SanYuan_SystemAdministrator/HelloWorld'
import GSystemManagement from '@/components/SanYuan_SystemAdministrator/GSystemManagement'
import GApproalSetup from '@/components/SanYuan_SystemAdministrator/GApproalSetup'
import GDaylyManage from '@/components/SanYuan_SystemAdministrator/GDaylyManage'
import GJurisdiction from '@/components/SanYuan_SystemAdministrator/GJurisdiction'

import GSystemUnit from '@/components/SanYuan_SystemAdministrator/management/GSystemUnit'
import GSystemUnitList from '@/components/SanYuan_SystemAdministrator/management/GSystemUnitList'
import GSystemUserList from '@/components/SanYuan_SystemAdministrator/management/GSystemUserList'


import GSystemLogStamp from '@/components/SanYuan_SystemAdministrator/log/GSystemLogStamp'
import GSystemLogStampList from '@/components/SanYuan_SystemAdministrator/log/GSystemLogStampList'
import GSystemLogOperatelist from '@/components/SanYuan_SystemAdministrator/log/GSystemLogOperatelist'
import GSystemLogUserList from '@/components/SanYuan_SystemAdministrator/log/GSystemLogUserList'

import GSystemSetInterFace from '@/components/SanYuan_SystemAdministrator/set/GSystemSetInterFace'
import GSystemSetInterFaceList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetInterFaceList'
import GSystemSetPasswordList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetPasswordList'
import GSystemSetPowerList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetPowerList'


<<<<<<< HEAD
import sealIndex from '@/components/sealAdministrator/sealCommon/sealIndex'
import selManageList from '@/components/sealAdministrator/manage/sealManageList'
import addSeal from '@/components/sealAdministrator/manage/addSeal'
import selArchiveList from '@/components/sealAdministrator/archive/selArchiveList'
import selLogList from '@/components/sealAdministrator/log/selLogList'

import signatureIndex from '@/components/signature/signatureCommon/signatureIndex'
import signatureConfigList from '@/components/signature/config/signatureConfigList'


import Register from '@/ThreeJobs/index/Register'
import component from '@/ThreeJobs/SafetyManagement/component/component'
import Zimg from '@/ThreeJobs/SafetyManagement/component/Zimg'
import Zryqx from '@/ThreeJobs/SafetyManagement/SystemManagement/Zryqx'
import Zquanxian from '@/ThreeJobs/SafetyManagement/SystemManagement/Zquanxian'
import Zlogguanli from '@/ThreeJobs/SafetyManagement/LogManagement/Zlogguanli'
import GSystemSetup from '@/ThreeJobs/SafetyManagement/ApprovalManagement/GSystemSetup'
import Zanquanshenji from '@/ThreeJobs/SafetyAuditor/Zanquanshenji'
import Zanquanshenjis from '@/ThreeJobs/SafetyAuditor/Zanquanshenjis'
import ZNewltype from '@/ThreeJobs/SafetyManagement/ApprovalManagement/ZNewltype'
import Zsystemlog from '@/ThreeJobs/SafetyAuditor/Zsystemlog'
import Zanquanlog from '@/ThreeJobs/SafetyAuditor/Zanquanlog'
import Zzhizhanglog from '@/ThreeJobs/SafetyAuditor/Zzhizhanglog'
import Zyinkongyilog from '@/ThreeJobs/SafetyAuditor/Zyinkongyilog'
import ZSystemManagement from '@/ThreeJobs/SafetyManagement/SystemManagement/ZSystemManagement'
=======
// import Register from '@/ThreeJobs/index/Register'
// import component from '@/ThreeJobs/SafetyManagement/component/component'
// import Zimg from '@/ThreeJobs/SafetyManagement/component/Zimg'
// import Zryqx from '@/ThreeJobs/SafetyManagement/SystemManagement/Zryqx'
// import Zquanxian from '@/ThreeJobs/SafetyManagement/SystemManagement/Zquanxian'
// import Zlogguanli from '@/ThreeJobs/SafetyManagement/LogManagement/Zlogguanli'
// import GSystemSetup from '@/ThreeJobs/SafetyManagement/ApprovalManagement/GSystemSetup'
// import Zanquanshenji from '@/ThreeJobs/SafetyAuditor/Zanquanshenji'
// import Zanquanshenjis from '@/ThreeJobs/SafetyAuditor/Zanquanshenjis'
// import ZNewltype from '@/ThreeJobs/SafetyManagement/ApprovalManagement/ZNewltype'
// import Zsystemlog from '@/ThreeJobs/SafetyAuditor/Zsystemlog'
// import Zanquanlog from '@/ThreeJobs/SafetyAuditor/Zanquanlog'
// import Zzhizhanglog from '@/ThreeJobs/SafetyAuditor/Zzhizhanglog'
// import Zyinkongyilog from '@/ThreeJobs/SafetyAuditor/Zyinkongyilog'
// import ZSystemManagement from '@/ThreeJobs/SafetyManagement/SystemManagement/ZSystemManagement'
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580


import Router from 'vue-router'
Vue.use(Router)
// GAdminisrator GUnit GDayly
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Register',
      component: _import("ThreeJobs/index/Register"),
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'GSystemUnit',
          name: 'GSystemUnit',
          component: GSystemUnit,
          children: [
<<<<<<< HEAD
            {
              path: '',
              name: 'GSystemUnitList',
              component: GSystemUnitList
            }, {
              path: 'GSystemUnitList',
              name: 'GSystemUnitList',
              component: GSystemUnitList
            },
            {
              path: 'GSystemUserList',
              name: 'GSystemUserList',
              component: GSystemUserList
            }]
        },
        {
          path: 'GSystemLogStamp',
          name: 'GSystemLogStamp',
          component: GSystemLogStamp,
          children: [{
            path: '',
            name: 'GSystemLogStampList',
            component: GSystemLogStampList
          }, {
            path: 'GSystemLogStampList',
            name: 'GSystemLogStampList',
            component: GSystemLogStampList
          },
          {
            path: 'GSystemLogOperatelist',
            name: 'GSystemLogOperatelist',
            component: GSystemLogOperatelist
          },
          {
            path: 'GSystemLogUserList',
            name: 'GSystemLogUserList',
            component: GSystemLogUserList
          }]
        },
        {
          path: 'GSystemSetInterFace',
          name: 'GSystemSetInterFace',
          component: GSystemSetInterFace,
          children: [
            {
              path: '',
              name: 'GSystemSetInterFaceList',
              component: GSystemSetInterFaceList
            }, {
              path: 'GSystemSetInterFaceList',
              name: 'GSystemSetInterFaceList',
              component: GSystemSetInterFaceList
            },
            {
=======
            {
              path: '',
              name: 'GSystemUnitList',
              component: GSystemUnitList
            }, {
              path: 'GSystemUnitList',
              name: 'GSystemUnitList',
              component: GSystemUnitList
            },
            {
              path: 'GSystemUserList',
              name: 'GSystemUserList',
              component: GSystemUserList
            }]
        },
        {
          path: 'GSystemLogStamp',
          name: 'GSystemLogStamp',
          component: GSystemLogStamp,
          children: [{
            path: '',
            name: 'GSystemLogStampList',
            component: GSystemLogStampList
          }, {
            path: 'GSystemLogStampList',
            name: 'GSystemLogStampList',
            component: GSystemLogStampList
          },
          {
            path: 'GSystemLogOperatelist',
            name: 'GSystemLogOperatelist',
            component: GSystemLogOperatelist
          },
          {
            path: 'GSystemLogUserList',
            name: 'GSystemLogUserList',
            component: GSystemLogUserList
          }]
        },
        {
          path: 'GSystemSetInterFace',
          name: 'GSystemSetInterFace',
          component: GSystemSetInterFace,
          children: [
            {
              path: '',
              name: 'GSystemSetInterFaceList',
              component: GSystemSetInterFaceList
            }, {
              path: 'GSystemSetInterFaceList',
              name: 'GSystemSetInterFaceList',
              component: GSystemSetInterFaceList
            },
            {
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
              path: 'GSystemSetPasswordList',
              name: 'GSystemSetPasswordList',
              component: GSystemSetPasswordList
            },
            {
              path: 'GSystemSetPowerList',
              name: 'GSystemSetPowerList',
              component: GSystemSetPowerList
            }
          ]
        }]
    },
    {
      path: '',
      name: 'GSystemUnit',
      component: GSystemUnit
    },
    {
      path: '/GJurisdiction',
      name: 'GJurisdiction',
      component: GJurisdiction
    },
    {
      path: '/GSystemManagement',
      name: 'GSystemManagement',
      component: GSystemManagement
    },
    {
      path: 'GDaylyManage',
      name: 'GDaylyManage',
      component: GDaylyManage
    },
    {
      path: 'GApproalSetup',
      name: 'GApproalSetup',
      component: GApproalSetup
    }
    , {
      path: '/component',
      name: 'component',
<<<<<<< HEAD
      component: component,
      children: [
        {
          path: "Zimg",
          name: "Zimg",
          component: Zimg,
        },
        {
          path: "Zryqx",
          name: "Zryqx",
          component: Zryqx,
        },
        {
          path: "Zquanxian",
          name: "Zquanxian",
          component: Zquanxian,
=======
      component: _import("ThreeJobs/SafetyManagement/component/component"),
      children: [
        {
          path: "index",
          name: "index",
          component: _import("ThreeJobs/SafetyManagement/component/index"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
        },
        {
          path: "Zlogguanli",
          name: "Zlogguanli",
<<<<<<< HEAD
          component: Zlogguanli,
=======
          component: _import("ThreeJobs/SafetyManagement/LogManagement/Zlogguanli"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
        },
        {
          path: "ZNewltype",
          name: "ZNewltype",
<<<<<<< HEAD
          component: ZNewltype,
=======
          component: _import("ThreeJobs/SafetyManagement/ApprovalManagement/ZNewltype"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
        },
        {
          path: "ZSystemManagement",
          name: "ZSystemManagement",
<<<<<<< HEAD
          component: ZSystemManagement,
=======
          component: _import("ThreeJobs/SafetyManagement/SystemManagement/ZSystemManagement"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
        },
        {
          path: "GSystemSetup",
          name: "GSystemSetup",
<<<<<<< HEAD
          component: GSystemSetup,
=======
          component: _import("ThreeJobs/SafetyManagement/ApprovalManagement/GSystemSetup"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
        }
      ]
    },
    {
      path: '/Zanquanshenji',
      name: 'Zanquanshenji',
<<<<<<< HEAD
      component: Zanquanshenji,
=======
      component: _import("ThreeJobs/SafetyAuditor/Zanquanshenji"),
>>>>>>> 0927df386f22a143f366d374dceaa78d60ff5580
      children: [
        {
          path: 'Zanquanshenjis',
          name: 'Zanquanshenjis',
          component: _import("ThreeJobs/SafetyAuditor/Zanquanshenjis"),
        },
        {
          path: 'Zsystemlog',
          name: 'Zsystemlog',
          component: _import("ThreeJobs/SafetyAuditor/Zsystemlog"),
        },
        {
          path: 'Zanquanlog',
          name: 'Zanquanlog',
          component: _import("ThreeJobs/SafetyAuditor/Zanquanlog"),
        },
        {
          path: 'Zzhizhanglog',
          name: 'Zzhizhanglog',
          component: _import("ThreeJobs/SafetyAuditor/Zzhizhanglog"),
        },
        {
          path: 'Zyinkongyilog',
          name: 'Zyinkongyilog',
          component: _import("ThreeJobs/SafetyAuditor/Zyinkongyilog"),
        }
      ]
    },
    {
      path: '/CentreComponent',
      name: 'CentreComponent',
      component: _import("ManagementSignet/component/CentreComponent"),
      children :[
        {
          path : "Firstindex",
          name : "Firstindex",
          component : _import("ManagementSignet/component/Firstindex")
        },
        {
          path : "ManagementSignet",
          name : "ManagementSignet",
          component : _import("ManagementSignet/component/ManagementSignet")
        }
      ]
    },
    {
      path: '/sealIndex',
      name: 'sealIndex',
      component: sealIndex,
      children: [
        {
          path: "sealManageList",
          name: "sealManageList",
          component: selManageList
        },
        {
          path: "addSeal",
          name: "addSeal",
          component: addSeal
        },
        {
          path: "selArchiveList",
          name: "selArchiveList",
          component: selArchiveList
        },
        {
          path: "selLogList",
          name: "selLogList",
          component: selLogList
        }

      ]
    },
    {
      path: '/signatureIndex',
      name: 'signatureIndex',
      component: signatureIndex,
      children: [
        {
          path: "signatureConfigList",
          name: "signatureConfigList",
          component: signatureConfigList
        }
      ]
    }
  ]
})
