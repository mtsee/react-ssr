import React from 'react';

export interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}
export function UserIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.996 15.75" width={16} height={16}>
      <path
        d="M59.955,110.49a4.487,4.487,0,0,1,2.115,8.445,7.207,7.207,0,0,1,5.079,6.876.428.428,0,1,1-.857,0,6.341,6.341,0,0,0-6.306-6.339.421.421,0,0,1-.138-.009,4.487,4.487,0,0,1,.106-8.973Zm0,8.119a3.631,3.631,0,1,0-3.631-3.63,3.635,3.635,0,0,0,3.631,3.63Zm-5.094,2.124a.429.429,0,1,1,.607.605,6.3,6.3,0,0,0-1.85,4.474.428.428,0,1,1-.857,0,7.143,7.143,0,0,1,2.1-5.079Zm9.627-2.014h0a.428.428,0,0,1,.428-.429,3.019,3.019,0,0,0,0-6.024.428.428,0,1,1,0-.857,3.781,3.781,0,0,1,3.676,3.869,3.911,3.911,0,0,1-1.819,3.337,6.153,6.153,0,0,1,3.984,5.841.428.428,0,0,1-.857,0,5.158,5.158,0,0,0-4.985-5.305.43.43,0,0,1-.428-.43Zm0,0"
        transform="translate(-52.762 -110.49)"
        fill={props.color}
      />
    </svg>
  );
}
UserIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function WorksIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15.982" width={16} height={16}>
      <path
        d="M75.66,71.468l-3.637-3.633,3.317-3.314a1.237,1.237,0,0,0,.372-.835,1.121,1.121,0,0,0-.329-.849l-2.321-2.322a1.132,1.132,0,0,0-.8-.327,1.254,1.254,0,0,0-.883.371l-1.382,1.379s0,0,0,0l0,0-1.928,1.926L64.421,60.24a1.166,1.166,0,0,0-1.645,0L60.34,62.673a1.163,1.163,0,0,0,0,1.643l3.637,3.631L61.221,70.7a.419.419,0,0,0-.124.271l-.656,3.99a.016.016,0,0,1,0,.009v.005c0,.005,0,.009,0,.014v.071a.359.359,0,0,0,.012.076s0,.005,0,.007.005.018.007.025a.41.41,0,0,0,.327.278H60.8c.019,0,.037,0,.057,0a.433.433,0,0,0,.05,0l.016,0h0l4.037-.661a.422.422,0,0,0,.249-.141l2.733-2.731,3.636,3.633a1.166,1.166,0,0,0,1.645,0l2.436-2.432a1.163,1.163,0,0,0,0-1.643ZM71.966,61.152a.417.417,0,0,1,.288-.126.294.294,0,0,1,.211.083l2.325,2.322a.286.286,0,0,1,.081.223.411.411,0,0,1-.126.274l-1.088,1.086-2.779-2.777ZM60.934,63.724a.324.324,0,0,1,0-.456l2.436-2.434a.325.325,0,0,1,.456,0l3.634,3.634L64.57,67.354Zm3.924,4.531.011-.011,3.487-3.481c.011-.011.021-.023.03-.034l1.9-1.9,2.779,2.777-1.93,1.928,0,0-3.485,3.48,0,0L64.89,73.772,62.111,71ZM61.8,71.873l2.215,2.212-2.65.435Zm13.267.642-2.434,2.434a.325.325,0,0,1-.456,0l-3.637-3.633,1.226-1.224,1.665-1.664,3.637,3.631a.324.324,0,0,1,0,.456Z"
        transform="translate(-60 -59.9)"
        fill={props.color}
      />
      <path
        d="M394.621,403.036a.429.429,0,0,0,.3-.124l3.4-3.394a.423.423,0,0,0,.124-.3.419.419,0,0,0-.124-.3.423.423,0,0,0-.3-.124.416.416,0,0,0-.3.124l-3.4,3.394a.423.423,0,0,0-.124.3.423.423,0,0,0,.421.421Z"
        transform="translate(-388.287 -392.806)"
        fill={props.color}
      />
    </svg>
  );
}
WorksIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function EditorIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.927 19.348" width={16} height={16}>
      <path
        d="M62.755,76.254a.692.692,0,1,1,0,1.384H43.212a.692.692,0,1,1,0-1.384Z"
        transform="translate(-42.52 -58.29)"
        fill={props.color}
      />
      <path
        d="M61.679,62.969,50.7,73.945l-4.285.434.434-4.275,9.541-9.541,1.435-1.435a1.747,1.747,0,0,1,2.406,0l1.435,1.435a1.7,1.7,0,0,1,.5,1.208A1.644,1.644,0,0,1,61.679,62.969ZM47.966,72.83l2.1-.217,8.7-8.7-1.89-1.89-8.7,8.7ZM59.035,60.016a.32.32,0,0,0-.227.093l-.94.94,1.89,1.89L60.7,62a.324.324,0,0,0,0-.454l-1.435-1.435A.32.32,0,0,0,59.035,60.016Z"
        transform="translate(-44.386 -58.648)"
        fill={props.color}
      />
    </svg>
  );
}
EditorIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function ShareIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.882 19.344" width={16} height={16}>
      <g>
        <path
          d="M122.727,124.245a.678.678,0,0,0-.676.677v9.131a.868.868,0,0,1-.868.868H105.74a.869.869,0,0,1-.869-.868v-14.9a.87.87,0,0,1,.869-.868h9.946a.676.676,0,0,0,0-1.351H105.637a2.119,2.119,0,0,0-2.117,2.117v15.109a2.119,2.119,0,0,0,2.117,2.117h15.648a2.119,2.119,0,0,0,2.117-2.117v-9.238a.677.677,0,0,0-.675-.673"
          transform="translate(-103.52 -116.929)"
          fill={props.color}
        />
        <path
          d="M123.48,110.228l-2.143-2.276a.764.764,0,1,1,1.112-1.047l3.354,3.563a.764.764,0,0,1-.556,1.287h-3.833a3.691,3.691,0,0,0-3.548,3.818v4.581a.764.764,0,1,1-1.527,0v-4.581a5.215,5.215,0,0,1,5.075-5.345h2.066Z"
          transform="translate(-106.139 -106.664)"
          fill={props.color}
        />
      </g>
    </svg>
  );
}
ShareIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};
export function OutIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14.816" width={16} height={16}>
      <g data-name="退出 (1)" fill={props.color}>
        <path
          d="M76.9,14.816H65.1A1.149,1.149,0,0,1,64,13.622v-3.29a.463.463,0,0,1,.926,0v3.29c0,.153.09.268.17.268H76.9c.081,0,.171-.115.171-.268V1.195c0-.154-.091-.269-.171-.269H65.1c-.081,0-.17.115-.17.269v3.29a.463.463,0,0,1-.926,0V1.195A1.15,1.15,0,0,1,65.1,0H76.9A1.15,1.15,0,0,1,78,1.195V13.622A1.149,1.149,0,0,1,76.9,14.816Z"
          transform="translate(-64)"
          fill={props.color}
        />
        <path
          d="M72.1,480.874H64.437a.437.437,0,1,1,0-.874H72.1a.437.437,0,1,1,0,.874Z"
          transform="translate(-64 -473.029)"
          fill={props.color}
        />
        <path
          d="M526.677,482.912a.437.437,0,0,1-.334-.719l1.748-2.071a.437.437,0,1,1,.668.564l-1.748,2.07A.436.436,0,0,1,526.677,482.912Z"
          transform="translate(-519.456 -472.919)"
          fill={props.color}
        />
        <path
          d="M528.39,331.388a.437.437,0,0,1-.334-.156l-1.748-2.07a.437.437,0,0,1,.667-.564l1.748,2.071a.437.437,0,0,1-.333.719Z"
          transform="translate(-519.42 -323.621)"
          fill={props.color}
        />
      </g>
    </svg>
  );
}
OutIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function UseIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.19 18" width={16} height={18}>
      <path
        data-name="账号 (1)"
        d="M108.186,58a5.247,5.247,0,0,1,2.631,9.786h0a8.1,8.1,0,0,1,5.373,7.626.588.588,0,0,1-1.176.014v-.014a6.919,6.919,0,0,0-13.838-.114v.114a.588.588,0,1,1-1.176,0,8.1,8.1,0,0,1,5.487-7.666h0a5.247,5.247,0,0,1,2.7-9.746Zm0,1.176a4.07,4.07,0,1,0,4.07,4.07,4.07,4.07,0,0,0-4.07-4.07Z"
        transform="translate(-100 -58)"
        fill={props.color}
      />
    </svg>
  );
}
UseIcon.defaultProps = {
  color: '#fff',
  width: 12,
  height: 12,
};

export function CopyIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.862 13" width={16} height={16}>
      <path
        data-name="路径 27"
        d="M147.688,206.95h-8.63a1.2,1.2,0,0,1-1.233-1.217V195.594h8.63a1.2,1.2,0,0,1,1.233,1.217V206.95Zm-9.041-10.545v9.328a.386.386,0,0,0,.411.406h7.808v-9.328a.386.386,0,0,0-.411-.406h-7.808Z"
        transform="translate(-137.825 -193.95)"
        fill={props.color}
      />
      <path
        data-name="路径 28"
        d="M275,373.076h-4.931a.411.411,0,0,1,0-.822H275a.412.412,0,0,1,.411.411A.442.442,0,0,1,275,373.076Zm0,2.055h-4.931a.411.411,0,1,1,0-.822H275a.412.412,0,0,1,.411.411A.442.442,0,0,1,275,375.13Zm0,2.055h-4.931a.411.411,0,1,1,0-.822H275a.412.412,0,0,1,.411.411A.442.442,0,0,1,275,377.185Z"
        transform="translate(-267.652 -367.937)"
        fill={props.color}
      />
      <path
        data-name="路径 29"
        d="M283.565,90.125h-8.219a.406.406,0,1,0,0,.811h8.219a.386.386,0,0,1,.411.406v9.328h-.493v.811H284.8V91.342a1.228,1.228,0,0,0-1.233-1.217Z"
        transform="translate(-272.935 -90.125)"
        fill={props.color}
      />
      <path
        data-name="路径 30"
        d="M797,776.083a.411.411,0,1,0,.411-.411A.411.411,0,0,0,797,776.083Z"
        transform="translate(-786.868 -765.138)"
        fill={props.color}
      />
    </svg>
  );
}
CopyIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function DeleteIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" data-name="删除 (1)" viewBox="0 0 11 13.406" width={16} height={16}>
      <path
        data-name="路径 20"
        d="M489.527,412.669a.334.334,0,0,0,.333-.334v-4.669a.334.334,0,1,0-.667,0v4.669A.334.334,0,0,0,489.527,412.669Z"
        transform="translate(-484.027 -402.07)"
        fill={props.color}
      />
      <path
        data-name="路径 21"
        d="M627.423,412.669a.334.334,0,0,0,.334-.334v-4.669a.334.334,0,1,0-.667,0v4.669A.334.334,0,0,0,627.423,412.669Z"
        transform="translate(-619.856 -402.07)"
        fill={props.color}
      />
      <path
        data-name="路径 22"
        d="M351.632,412.669a.334.334,0,0,0,.334-.334v-4.669a.334.334,0,1,0-.667,0v4.669A.334.334,0,0,0,351.632,412.669Z"
        transform="translate(-348.198 -402.07)"
        fill={props.color}
      />
      <path
        data-name="路径 23"
        d="M154.768,63.969h-2.062v-.688a.688.688,0,0,0-.688-.687h-4.125a.687.687,0,0,0-.687.688v.687h-2.062a.688.688,0,0,0-.687.687v.688a.688.688,0,0,0,.687.687v8.594A1.375,1.375,0,0,0,146.518,76h6.875a1.375,1.375,0,0,0,1.375-1.375V66.032a.687.687,0,0,0,.688-.687v-.687A.688.688,0,0,0,154.768,63.969Zm-6.875-.374a.344.344,0,0,1,.344-.344h3.437a.344.344,0,0,1,.344.344v.344h-4.125Zm6.187,11.031a.688.688,0,0,1-.687.687h-6.875a.688.688,0,0,1-.688-.687V66.032h8.25v8.594Zm.344-9.281h-8.937a.344.344,0,1,1,0-.687h8.937a.344.344,0,1,1,0,.687Z"
        transform="translate(-144.455 -62.594)"
        fill={props.color}
      />
    </svg>
  );
}
DeleteIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function AddIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
      <g data-name="新建 (1)" fill={props.color}>
        <path
          data-name="路径 27577"
          d="M42.911,1.092A5.153,5.153,0,0,0,39.7.008L6.112,0A5.177,5.177,0,0,0,2.889,1.083,3.8,3.8,0,0,0,1.4,4.031V38.969a3.8,3.8,0,0,0,1.489,2.948A5.156,5.156,0,0,0,6.108,43H40.361A4.042,4.042,0,0,0,44.4,38.969V4.04a3.8,3.8,0,0,0-1.489-2.948Zm-1.2,37.877a1.349,1.349,0,0,1-1.346,1.344H6.108c-1.073,0-2.015-.63-2.015-1.344V4.031a1.152,1.152,0,0,1,.48-.852,2.513,2.513,0,0,1,1.536-.491L39.692,2.7c1.073,0,2.015.63,2.015,1.344Z"
          transform="translate(-1.4)"
        />
        <path
          data-name="路径 27578"
          d="M263.009,250.246H254.3v-8.7a1.348,1.348,0,0,0-2.7,0v8.7h-8.76a1.343,1.343,0,1,0,0,2.686h8.76v8.7a1.348,1.348,0,0,0,2.7,0v-8.7h8.706a1.343,1.343,0,1,0,0-2.686Z"
          transform="translate(-231.409 -230.105)"
        />
      </g>
    </svg>
  );
}
AddIcon.defaultProps = {
  color: '#000',
  width: 12,
  height: 12,
};

export function TimeIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width={12} height={12}>
      <path
        d="M99.867,105.867a6,6,0,1,1,6-6A6,6,0,0,1,99.867,105.867Zm0-.735A5.265,5.265,0,1,0,94.6,99.867,5.265,5.265,0,0,0,99.867,105.132Zm-.122-4.653H103.3a.367.367,0,0,1,0,.735H99.377a.367.367,0,0,1-.367-.367V96.928a.367.367,0,1,1,.735,0v3.551Z"
        transform="translate(-93.867 -93.867)"
        fill={props.color}
      />
    </svg>
  );
}
TimeIcon.defaultProps = {
  color: '#ccc',
  width: 12,
  height: 12,
};

export function CodeIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width={20} height={20}>
      <g fill={props.color}>
        <path
          data-name="路径 27581"
          d="M94.163,108.174H57.409A13.558,13.558,0,0,1,43.866,94.631V57.877A13.558,13.558,0,0,1,57.409,44.334H94.163a13.558,13.558,0,0,1,13.543,13.543V94.631A13.558,13.558,0,0,1,94.163,108.174ZM57.409,50.353a7.532,7.532,0,0,0-7.524,7.524V94.631a7.532,7.532,0,0,0,7.524,7.524H94.163a7.532,7.532,0,0,0,7.524-7.524V57.877a7.532,7.532,0,0,0-7.524-7.524Z"
          transform="translate(-43.866 -44.292)"
        />
        <path
          data-name="路径 27582"
          d="M208.146,85.605H194.9a3.018,3.018,0,0,1-3.01-3.009V69.35a3.018,3.018,0,0,1,3.01-3.009h13.245a3.018,3.018,0,0,1,3.01,3.009V82.6A3.018,3.018,0,0,1,208.146,85.605Zm88.812,22.288H260.2A13.558,13.558,0,0,1,246.66,94.35V57.6A13.558,13.558,0,0,1,260.2,44.053h36.755A13.558,13.558,0,0,1,310.5,57.6V94.35A13.558,13.558,0,0,1,296.958,107.893ZM260.2,50.072a7.532,7.532,0,0,0-7.524,7.524V94.35a7.532,7.532,0,0,0,7.524,7.524h36.755a7.532,7.532,0,0,0,7.524-7.524V57.6a7.532,7.532,0,0,0-7.524-7.524Z"
          transform="translate(-170.5 -44.053)"
        />
        <path
          data-name="路径 27583"
          d="M159.438,211.154H146.192a3.018,3.018,0,0,1-3.009-3.009V194.9a3.018,3.018,0,0,1,3.009-3.009h13.245a3.018,3.018,0,0,1,3.009,3.009v13.245A3.018,3.018,0,0,1,159.438,211.154ZM94.163,310.471H57.409a13.558,13.558,0,0,1-13.543-13.543V260.174a13.558,13.558,0,0,1,13.543-13.543H94.163a13.558,13.558,0,0,1,13.543,13.543v36.755A13.558,13.558,0,0,1,94.163,310.471ZM57.409,252.65a7.532,7.532,0,0,0-7.524,7.524v36.755a7.532,7.532,0,0,0,7.524,7.524H94.163a7.532,7.532,0,0,0,7.524-7.524V260.174a7.532,7.532,0,0,0-7.524-7.524Z"
          transform="translate(-43.866 -170.471)"
        />
        <path
          data-name="路径 27584"
          d="M208.146,614.821H194.9a3.019,3.019,0,0,1-3.01-3.01V598.565a3.019,3.019,0,0,1,3.01-3.01h13.245a3.019,3.019,0,0,1,3.01,3.01v13.246A3.019,3.019,0,0,1,208.146,614.821Zm62.869-9.534H257.207a7.546,7.546,0,0,1-7.524-7.524V583.956a7.546,7.546,0,0,1,7.524-7.523h13.807a7.546,7.546,0,0,1,7.524,7.523v13.807A7.546,7.546,0,0,1,271.014,605.287Z"
          transform="translate(-169.98 -496.97)"
        />
        <path
          data-name="路径 27585"
          d="M796.677,767.537v28.952H767.724V782.013H782.2V767.537Z"
          transform="translate(-659.686 -659.498)"
        />
        <path
          data-name="路径 27586"
          d="M588.637,878.218H577.772a1.811,1.811,0,0,1-1.806-1.806V865.548a1.811,1.811,0,0,1,1.806-1.806h10.865a1.811,1.811,0,0,1,1.805,1.806v10.865A1.811,1.811,0,0,1,588.637,878.218Z"
          transform="translate(-496.458 -741.227)"
        />
        <path
          data-name="路径 27587"
          d="M876.6,590.909H865.734a1.811,1.811,0,0,1-1.806-1.806V578.239a1.811,1.811,0,0,1,1.806-1.806H876.6a1.811,1.811,0,0,1,1.806,1.806V589.1A1.811,1.811,0,0,1,876.6,590.909Z"
          transform="translate(-741.414 -496.848)"
        />
      </g>
    </svg>
  );
}
CodeIcon.defaultProps = {
  color: '#fff',
  width: 20,
  height: 20,
};

export function QrCodeIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={140} height={140}>
      <g fill={props.color}>
        <path
          data-name="路径 27581"
          d="M51.051,53.454H45.8a1.937,1.937,0,0,1-1.935-1.935V46.269A1.937,1.937,0,0,1,45.8,44.334h5.251a1.937,1.937,0,0,1,1.935,1.935v5.251A1.937,1.937,0,0,1,51.051,53.454ZM45.8,45.194a1.076,1.076,0,0,0-1.075,1.075v5.251A1.076,1.076,0,0,0,45.8,52.594h5.251a1.076,1.076,0,0,0,1.075-1.075V46.269a1.076,1.076,0,0,0-1.075-1.075Z"
          transform="translate(-43.866 -44.328)"
        />
        <path
          data-name="路径 27582"
          d="M194.213,49.989h-1.892a.431.431,0,0,1-.43-.43V47.667a.431.431,0,0,1,.43-.43h1.892a.431.431,0,0,1,.43.43v1.892A.431.431,0,0,1,194.213,49.989ZM206.9,53.173H201.65a1.937,1.937,0,0,1-1.935-1.935V45.988a1.937,1.937,0,0,1,1.935-1.935H206.9a1.937,1.937,0,0,1,1.935,1.935v5.251A1.937,1.937,0,0,1,206.9,53.173Zm-5.251-8.26a1.076,1.076,0,0,0-1.075,1.075v5.251a1.076,1.076,0,0,0,1.075,1.075H206.9a1.076,1.076,0,0,0,1.075-1.075V45.988a1.076,1.076,0,0,0-1.075-1.075Z"
          transform="translate(-188.835 -44.053)"
        />
        <path
          data-name="路径 27583"
          d="M60.376,194.642H58.484a.431.431,0,0,1-.43-.43V192.32a.431.431,0,0,1,.43-.43h1.892a.431.431,0,0,1,.43.43v1.892A.431.431,0,0,1,60.376,194.642ZM51.051,208.83H45.8a1.937,1.937,0,0,1-1.935-1.935v-5.251A1.937,1.937,0,0,1,45.8,199.71h5.251a1.937,1.937,0,0,1,1.935,1.935V206.9A1.937,1.937,0,0,1,51.051,208.83ZM45.8,200.57a1.076,1.076,0,0,0-1.075,1.075V206.9A1.076,1.076,0,0,0,45.8,207.97h5.251a1.076,1.076,0,0,0,1.075-1.075v-5.251a1.076,1.076,0,0,0-1.075-1.075Z"
          transform="translate(-43.866 -188.83)"
        />
        <path
          data-name="路径 27584"
          d="M194.213,581.917h-1.892a.431.431,0,0,1-.43-.43v-1.892a.431.431,0,0,1,.43-.43h1.892a.431.431,0,0,1,.43.43v1.892A.431.431,0,0,1,194.213,581.917Zm8.981-1.362h-1.972a1.078,1.078,0,0,1-1.075-1.075v-1.972a1.078,1.078,0,0,1,1.075-1.075h1.972a1.078,1.078,0,0,1,1.075,1.075v1.972A1.078,1.078,0,0,1,203.194,580.555Z"
          transform="translate(-188.761 -565.081)"
        />
        <path
          data-name="路径 27585"
          d="M771.86,767.537v4.136h-4.136V769.6h2.068v-2.068Z"
          transform="translate(-752.29 -752.103)"
        />
        <path
          data-name="路径 27586"
          d="M577.776,865.81h-1.552a.259.259,0,0,1-.258-.258V864a.259.259,0,0,1,.258-.258h1.552a.259.259,0,0,1,.258.258v1.552A.259.259,0,0,1,577.776,865.81Z"
          transform="translate(-564.608 -846.24)"
        />
        <path
          data-name="路径 27587"
          d="M865.739,578.5h-1.552a.259.259,0,0,1-.258-.258v-1.552a.259.259,0,0,1,.258-.258h1.552a.259.259,0,0,1,.258.258v1.552A.259.259,0,0,1,865.739,578.5Z"
          transform="translate(-846.427 -565.064)"
        />
      </g>
    </svg>
  );
}
QrCodeIcon.defaultProps = {
  color: '#fff',
  width: 20,
  height: 20,
};

export function MoreIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <g id="组_1054" data-name="组 1054" transform="translate(-1546 -439)">
        <rect
          id="矩形_1619"
          data-name="矩形 1619"
          width="24"
          height="24"
          rx="4"
          transform="translate(1546 439)"
          fill={props.color}
          opacity="0.4"
        />
        <g id="组_1053" data-name="组 1053" transform="translate(0.2 0.2)">
          <circle
            id="椭圆_282"
            data-name="椭圆 282"
            cx="1.8"
            cy="1.8"
            r="1.8"
            transform="translate(1550 449)"
            fill={props.color}
          />
          <circle
            id="椭圆_283"
            data-name="椭圆 283"
            cx="1.8"
            cy="1.8"
            r="1.8"
            transform="translate(1556 449)"
            fill={props.color}
          />
          <circle
            id="椭圆_284"
            data-name="椭圆 284"
            cx="1.8"
            cy="1.8"
            r="1.8"
            transform="translate(1562 449)"
            fill={props.color}
          />
        </g>
      </g>
    </svg>
  );
}
MoreIcon.defaultProps = {
  color: '#ffffff',
  width: 20,
  height: 20,
};

export function PreviewIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.672 70.658" width={70} height={70}>
      <path
        d="M53.226,70.738H10.641A10.623,10.623,0,0,1,0,60.166V10.652A10.586,10.586,0,0,1,10.572.08H60.093A10.579,10.579,0,0,1,70.672,10.673V51.353a2.353,2.353,0,0,1-4.706.007V10.666A5.887,5.887,0,0,0,60.1,4.779H10.586A5.879,5.879,0,0,0,4.72,10.645V60.159a5.905,5.905,0,0,0,5.928,5.866H53.219a2.357,2.357,0,0,1,.007,4.713ZM35.339,54.252a18.825,18.825,0,1,1,13.326-5.514A18.735,18.735,0,0,1,35.339,54.252Zm0-32.979A14.133,14.133,0,1,0,49.472,35.405,14.151,14.151,0,0,0,35.339,21.272ZM58.015,60.428a2.346,2.346,0,0,1-1.649-.669L45.415,49.028a2.352,2.352,0,0,1,3.292-3.361L59.651,56.4a2.353,2.353,0,0,1,.035,3.326A2.292,2.292,0,0,1,58.015,60.428Z"
        transform="translate(0 -.08)"
        fill={props.color}
      />
    </svg>
  );
}
PreviewIcon.defaultProps = {
  color: '#ffffff',
  width: 20,
  height: 20,
};

export function BindIcon(props: IconProps): JSX.Element {
  return (
    <svg id="组_874" data-name="组 874" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <circle id="椭圆_277" data-name="椭圆 277" cx="8" cy="8" r="8" fill="#18c1a3" />
      <path
        id="选择-_"
        data-name="选择-√"
        d="M77.489,214.635a.461.461,0,0,0-.653-.028l-5.346,5.166-2.574-2.844a.462.462,0,0,0-.685.621l2.877,3.179a.519.519,0,0,0,.073.065.462.462,0,0,0,.593-.026l5.687-5.479A.463.463,0,0,0,77.489,214.635Z"
        transform="translate(-64.862 -209.685)"
        fill="#fff"
      />
    </svg>
  );
}
BindIcon.defaultProps = {
  width: 16,
  height: 16,
};

export function ColesIcon(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <g data-name="组 1266" transform="translate(-1229 -131)">
        <rect data-name="矩形 1811" width="40" height="40" rx="10" transform="translate(1229 131)" fill="#181c20" />
        <path
          data-name="删除 关闭 叉"
          d="M85.84,83.867l7.013-6.933a1.32,1.32,0,0,0,0-1.893,1.352,1.352,0,0,0-1.92,0L83.92,81.92l-6.88-6.907a1.339,1.339,0,0,0-1.893,1.893L82,83.813l-7.28,7.2a1.32,1.32,0,0,0,0,1.893,1.352,1.352,0,0,0,1.92,0l7.253-7.173,7.147,7.173a1.339,1.339,0,0,0,1.893-1.893Z"
          transform="translate(1165.18 66.879)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
ColesIcon.defaultProps = {
  width: 40,
  height: 40,
};

export function DefaultAvatar(_props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <g data-name="组 1493" transform="translate(-748 -212)">
        <rect
          data-name="u=3102916626,4110683611&amp;fm=253&amp;app=138&amp;f=PNG&amp;fmt=auto&amp;q=75_看图王.web"
          width="120"
          height="120"
          rx="4"
          transform="translate(748 212)"
          fill="#aaa"
        />
        <g data-name="123132" fill="#fff">
          <path
            data-name="路径 27670"
            d="M71.61,74.112A26.662,26.662,0,1,0,98.272,47.45,26.662,26.662,0,0,0,71.61,74.112Z"
            transform="translate(708.932 184.051)"
          />
          <path
            data-name="路径 27671"
            d="M97.323,105.48A48.993,48.993,0,0,0,48.45,152.129H145.9C145.213,125.826,123.746,105.48,97.323,105.48Z"
            transform="translate(710.8 179.372)"
          />
        </g>
      </g>
    </svg>
  );
}
DefaultAvatar.defaultProps = {
  width: 120,
  height: 120,
};

export function DefaultSmallAvatar(_props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <g fill="#fff">
        <path
          data-name="路径 27668"
          d="M372.889,249.018m-6.231,0a6.231,6.231,0,1,0,6.231-6.231A6.231,6.231,0,0,0,366.658,249.018Z"
          transform="translate(-354.612 -235.794)"
        />
        <path
          data-name="路径 27669"
          d="M97.278,75.974a18,18,0,0,0-10.8,32.4h0c.069,0,.069.069.138.069.208.138.485.346.692.485a17.153,17.153,0,0,0,6.092,2.631,1.178,1.178,0,0,0,.485.069c.208.069.415.069.623.138.346.069.762.069,1.108.138h.346c.415,0,.9.069,1.315.069h1.731c.208,0,.415-.069.623-.069h.208c.277-.069.485-.069.692-.138h.069a18.056,18.056,0,0,0-3.323-35.793Zm11.839,30.531A11.214,11.214,0,0,0,97.763,95.428,11.434,11.434,0,0,0,86.34,106.851v.485a17.314,17.314,0,1,1,28.246-13.431A17.027,17.027,0,0,1,109.117,106.505Z"
          transform="translate(-79.278 -75.974)"
        />
      </g>
    </svg>
  );
}
DefaultSmallAvatar.defaultProps = {
  width: 36,
  height: 36,
};

export function UnSu(_props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.765 192.601">
      <defs>
        <linearGradient id="9ogh08rmva" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#d6e5ff" />
          <stop offset="1" stop-color="#d6e5ff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path
        data-name="路径 27688"
        d="M366.114,277.483V245.76H318.53a11.363,11.363,0,0,0-11.33,11.329V359.055a11.363,11.363,0,0,0,11.33,11.33h67.977a11.363,11.363,0,0,0,11.329-11.33V277.483Zm9.63,22.432-25.265,30.816L345.72,326.2l-4.758,4.645v-9.29l29.457-18.92L337.79,318.5l-8.5-7.931v-1.02l46.451-10.65Z"
        transform="translate(-260.522 -208.373)"
        fill="#bcd4ff"
      />
      <path
        data-name="路径 27689"
        d="M102.4,856.129c0,6.257,40.579,11.329,90.636,11.329s90.636-5.072,90.636-11.329S243.093,844.8,193.036,844.8,102.4,849.872,102.4,856.129Z"
        transform="translate(-101.04 -674.857)"
        opacity=".52"
        fill="url(#9ogh08rmva)"
      />
      <path
        data-name="路径 27690"
        d="M96.256,176.046a3.4,3.4,0,1,0,3.4-3.4A3.485,3.485,0,0,0,96.256,176.046Zm11.33,65.711a3.4,3.4,0,1,0,3.4-3.4A3.485,3.485,0,0,0,107.586,241.758Zm172.435,5.665c-3.4.906-4.192,1.586-5.1,5.1-.906-3.4-1.586-4.192-5.1-5.1,3.4-.906,4.192-1.7,5.1-5.1C275.829,245.723,276.509,246.516,280.021,247.422ZM119.142,163.244c-6.911,1.813-8.384,3.286-10.2,10.2-1.813-6.911-3.286-8.384-10.2-10.2,6.911-1.813,8.384-3.286,10.2-10.2C110.758,159.959,112.231,161.431,119.142,163.244ZM256.8,107.276c-3.4.906-4.079,1.586-4.985,4.985-.906-3.4-1.586-4.079-4.985-4.985,3.4-.906,4.079-1.586,4.985-4.985C252.6,105.69,253.4,106.37,256.8,107.276Zm13.482-17.447c-8.837,2.266-10.65,4.192-13.029,13.029-2.266-8.837-4.192-10.65-13.029-13.029,8.837-2.266,10.65-4.192,13.029-13.029C259.514,85.524,261.44,87.45,270.277,89.829ZM248.3,134.467a.849.849,0,0,0-.113-.566v-.113c0-.113-.113-.34-.113-.453s0-.113-.113-.227-.113-.227-.227-.34l-.113-.113c-.113-.113-.227-.34-.34-.453l-31.723-31.723a1.564,1.564,0,0,0-.453-.34l-.113-.113c-.113-.113-.227-.113-.34-.227-.113,0-.113,0-.227-.113a.681.681,0,0,0-.453-.113h-.113a4.907,4.907,0,0,1-.566-.113H154.263a26.062,26.062,0,0,0-26.058,26.058V227.482a26.062,26.062,0,0,0,26.058,26.058H222.24A26.062,26.062,0,0,0,248.3,227.482V134.467Zm-31.723-23.452,20.167,20.167H216.576V111.015Zm5.665,135.727H154.263A19.244,19.244,0,0,1,135,227.482V125.517a19.244,19.244,0,0,1,19.26-19.26h55.515V134.58a3.338,3.338,0,0,0,3.4,3.4H241.5v89.5a19.244,19.244,0,0,1-19.26,19.26Z"
        transform="translate(-96.256 -76.8)"
        fill="#d6e5ff"
      />
    </svg>
  );
}

UnSu.defaultProps = {
  width: 36,
  height: 36,
};

export function Audit(_props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.541 185.744">
      <defs>
        <linearGradient id="qriezazpca" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#d6e5ff" />
          <stop offset="1" stop-color="#d6e5ff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g data-name="组 1552">
        <path
          data-name="路径 27711"
          d="M102.4,856.126c0,6.255,40.566,11.326,90.607,11.326s90.607-5.071,90.607-11.326S243.048,844.8,193.007,844.8,102.4,849.871,102.4,856.126Z"
          transform="translate(-101.267 -681.708)"
          opacity=".52"
          fill="url(#qriezazpca)"
        />
        <path
          data-name="路径 27712"
          d="M98.186,264.5a3.4,3.4,0,1,0,3.4-3.4A3.484,3.484,0,0,0,98.186,264.5Zm181.441,5.663c-3.4.906-4.191,1.586-5.1,5.1-.906-3.4-1.586-4.191-5.1-5.1,3.4-.906,4.191-1.7,5.1-5.1C275.436,268.461,276.116,269.253,279.627,270.16ZM136.921,113.976c-4.3,1.133-5.21,2.039-6.456,6.456-1.133-4.3-2.039-5.21-6.456-6.456,4.3-1.133,5.21-2.039,6.456-6.456C131.711,111.824,132.617,112.73,136.921,113.976Zm-20.84,139.082c-4.757,1.246-5.776,2.265-7.022,7.022-1.246-4.757-2.265-5.776-7.022-7.022,4.757-1.246,5.776-2.265,7.022-7.022C110.418,250.792,111.437,251.812,116.081,253.057Zm7.249-125.717c-8.834,2.265-10.646,4.191-13.025,13.025-2.265-8.834-4.191-10.646-13.025-13.025,8.834-2.265,10.646-4.191,13.025-13.025C112.57,123.036,114.5,124.962,123.329,127.34Z"
          transform="translate(-97.279 -107.52)"
          fill="#d6e5ff"
        />
        <path
          data-name="路径 27713"
          d="M760.32,436.005v1.019l8.268,7.928,32.279-15.743L771.759,447.9v9.174l4.644-4.53v-.113l.113.113,4.644,4.53L806.19,426.6v-1.133Z"
          transform="translate(-613.649 -355.139)"
          fill="#d6e5ff"
        />
        <path
          data-name="路径 27714"
          d="M357.3,358.382h-7.928V341.167a48.89,48.89,0,0,0-26.729-43.378,49.021,49.021,0,0,0,26.729-43.378V237.2H357.3a3.4,3.4,0,0,0,0-6.8H244.038a3.4,3.4,0,1,0,0,6.8h7.928v17.215a48.89,48.89,0,0,0,26.729,43.378,49.021,49.021,0,0,0-26.729,43.378v17.215h-7.928a3.4,3.4,0,1,0,0,6.8H357.3a3.4,3.4,0,1,0,0-6.8Zm-98.535,0V341.167a42.136,42.136,0,0,1,30.014-40.207,3.3,3.3,0,0,0,2.378-3.285,3.435,3.435,0,0,0-2.378-3.285,41.862,41.862,0,0,1-30.014-39.98V237.2h83.811v17.215a42.136,42.136,0,0,1-30.014,40.207,3.3,3.3,0,0,0-2.378,3.285,3.435,3.435,0,0,0,2.378,3.285,42.136,42.136,0,0,1,30.014,40.207v16.989Z"
          transform="translate(-208.927 -203.219)"
          fill="#d6e5ff"
        />
        <path
          data-name="路径 27715"
          d="M425.676,438.271H393.51v-45.19l8.608-2.492a34.381,34.381,0,0,0,23.9-27.069H358.853a34.222,34.222,0,0,0,23.9,27.069l8.608,2.492v45.19H359.08a32.345,32.345,0,0,0-.68,6.569v9.287h67.955V444.84A32.345,32.345,0,0,0,425.676,438.271Z"
          transform="translate(-300.637 -306.891)"
          fill="#bcd4ff"
        />
      </g>
    </svg>
  );
}

Audit.defaultProps = {
  width: 36,
  height: 36,
};

export function NotPass(_props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.631 191.407">
      <defs>
        <linearGradient id="2dr2v4029a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#d6e5ff" />
          <stop offset="1" stop-color="#d6e5ff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g data-name="组 1554">
        <path
          data-name="路径 27704"
          d="M102.4,856.126c0,6.255,40.566,11.326,90.607,11.326s90.607-5.071,90.607-11.326S243.048,844.8,193.007,844.8,102.4,849.871,102.4,856.126Z"
          transform="translate(-100.185 -676.045)"
          opacity=".52"
          fill="url(#2dr2v4029a)"
        />
        <path
          data-name="路径 27705"
          d="M263.9,233.234a3.4,3.4,0,1,0,3.4-3.4A3.407,3.407,0,0,0,263.9,233.234Zm9.287,14.61c-4.3,1.133-5.21,2.039-6.229,6.229-1.133-4.3-2.039-5.21-6.229-6.229,4.191-1.133,5.21-2.039,6.229-6.229C267.973,245.805,268.879,246.825,273.183,247.844ZM103.861,109.215c-5.55,1.472-6.682,2.6-8.155,8.155-1.472-5.55-2.6-6.682-8.155-8.155,5.55-1.472,6.682-2.718,8.155-8.155C97.066,106.61,98.312,107.743,103.861,109.215Zm165.358-.227c-3.4.906-4.077,1.586-4.983,4.983-.906-3.4-1.586-4.077-4.983-4.983,3.4-.906,4.077-1.586,4.983-4.983C265.028,107.4,265.821,108.083,269.219,108.989Zm-2.378-14.044c-8.834,2.265-10.646,4.191-13.025,13.025-2.265-8.834-4.191-10.646-13.025-13.025,8.834-2.265,10.646-4.191,13.025-13.025C256.081,90.641,258.006,92.566,266.841,94.945Z"
          transform="translate(-87.552 -81.92)"
          fill="#d6e5ff"
        />
        <g data-name="组 1551">
          <path
            data-name="路径 27703"
            d="M343.659,245.76H261.726A11.359,11.359,0,0,0,250.4,257.086V359.019a11.359,11.359,0,0,0,11.326,11.326h38.668a40.683,40.683,0,0,1,36.469-58.895,38.888,38.888,0,0,1,18.121,4.3V257.086A11.359,11.359,0,0,0,343.659,245.76Zm-26.339,51.193-25.257,30.806-4.757-4.644v0l-4.757,4.644v-9.287L312,299.558l-32.618,15.856-8.494-7.928v-1.019l46.436-10.646ZM339.6,276.34H265.787a3.4,3.4,0,0,1,0-6.8H339.6a3.4,3.4,0,0,1,0,6.8Z"
            transform="translate(-209.86 -209.517)"
            fill="#bcd4ff"
          />
          <path
            data-name="路径 27707"
            d="M250.82,333.232h-40.93a26.053,26.053,0,0,1-26.05-26.05V205.249a26.053,26.053,0,0,1,26.05-26.05h81.933a26.053,26.053,0,0,1,26.049,26.05V260.18a3.4,3.4,0,0,1-6.8,0V205.249A19.238,19.238,0,0,0,291.822,186H209.889a19.238,19.238,0,0,0-19.254,19.254V307.182a19.238,19.238,0,0,0,19.254,19.254H250.82a3.4,3.4,0,1,1,0,6.8Z"
            transform="translate(-158.024 -157.681)"
            fill="#d6e5ff"
          />
          <path
            data-name="路径 27716"
            d="M225.614,257.471a32.845,32.845,0,1,1,32.845-32.845A32.869,32.869,0,0,1,225.614,257.471Zm0-58.895a26.05,26.05,0,1,0,26.049,26.05A26.053,26.053,0,0,0,225.614,198.576Z"
            transform="translate(-98.611 -81.887)"
            fill="#d6e5ff"
          />
          <g data-name="组 1549" fill="#bcd4ff">
            <path
              d="M464.356,116.432a3.053,3.053,0,0,1-3.044-3.044V92.644a3.044,3.044,0,0,1,6.088,0v20.744A3.053,3.053,0,0,1,464.356,116.432Z"
              transform="translate(-337.309 35.296)"
            />
            <path
              data-name="感叹号"
              d="M464.445,135.646h-.177a2.955,2.955,0,1,1,0-5.911h.177a2.955,2.955,0,0,1,0,5.911Z"
              transform="translate(-337.309 25.298)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

NotPass.defaultProps = {
  width: 36,
  height: 36,
};
