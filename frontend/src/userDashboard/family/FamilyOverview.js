import React from 'react';
import '../../style/./familyoverview.css';

function FamilyOverview() {
  const familyMembers = [
    { name: 'Chala Bulcha', relation: 'Brother' },
    { name: 'Hello Bulcha', relation: 'Sister' },
    { name: 'Harmee Bulcha', relation: 'Mother' },
    { name: 'Bulcha Beka', relation: 'Father' },
    { name: 'korme Eba', relation: 'Cousin' },
  ];

  return (
    <div className="familyoverview_container">
      <h2 className="familyoverview_title">Family Overview</h2>
      <div className="familyoverview_summary">
        <div className="familyoverview_item">
          <span className="familyoverview_label">Recently Added Family Members:</span>
          <span className="familyoverview_value">{familyMembers.length}</span>
        </div>
        <ul className="familyoverview_list">
          {familyMembers.map((member, index) => (
            <li key={index} className="familyoverview_member">
              <span className="familyoverview_member_name">{member.name}</span>
              <span className="familyoverview_member_relation">{member.relation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FamilyOverview;