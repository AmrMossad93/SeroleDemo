import {gql} from 'apollo-angular';

export const ALL_MASTER = gql`
  {
    masterMotorGeneric {
      pkId
      typeCd
      codeCd
      enNameTt
      arNameTt
      arDescriptionTt
      enDescriptionTt
      orderVl
      __typename

    }
  }
`;

export const AT_MASTER = gql`
  {
    mstAltheqaGenericEntity {
      pkId,
      typeCd,
      codeCd,
      enNameTt,
      arNameTt,
      orderVl,
    }
  }
`;

export const AT_VEHICLE_BODY = gql`
  {
    motorBodyTypeEntity{
      pkId,
      zzBodyTypeCd,
      zzBodyTypeTt,
      zzBodyTypeAr1Tt,
      sortVl
    }
  }
`;

export const AT_MAKE = gql`
  {
    motorMakeEntity {
      pkId,
      makeCode,
      make,
      makeTranslationOne,
    }
  }
`;

export const ALL_COUNTRY_MASTER = gql`
  {
    masterCountry {
      pkId,
      codeCd,
      enNameTt,
      arNameTt
    }
  }
`;
