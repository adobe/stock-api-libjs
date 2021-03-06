/**
 * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
import { expect } from 'chai';
import LicenseParamsUtils from './../src/utils/licenseParamsUtils';
import Constants from './../src/constants/constants';

describe('LicenseParamsUtils', () => {
  // Tests for validateContentLicenseParams function
  describe('validateContentLicenseParams', () => {
    beforeEach(function () {
      this.accessToken = 'testAccessToken';
    });

    it('should throw error contentId expects Integer if contentId argument passed is not Integer', function () {
      const LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.IMAGE.STANDARD;
      let testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 'test', LICENSE_TYPE);
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, [],
                                                                     LICENSE_TYPE);
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, {},
                                                                     LICENSE_TYPE);
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);
    });

    it('should throw error license expects string if license argument passed is not string', function () {
      let testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1234, 1);
      expect(testFn).to.throw(/license is not of type string/);

      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1234, []);
      expect(testFn).to.throw(/license is not of type string/);

      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1234, {});
      expect(testFn).to.throw(/license is not of type string/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateContentLicenseParams(undefined, 1234, 'STANDARD');
      expect(testFn).to.throw(/access token missing or not of type string!/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateContentLicenseParams(4, 1234, 'STANDARD');
      expect(testFn).to.throw(/access token missing or not of type string!/);
    });

    it('should throw error for unsupported license type', function () {
      const testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1, 'myLicenseType');
      expect(testFn).to.throw(/License type not supported!/);
    });

    it('should not throw error for unsupported license type', function () {
      let LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.EMPTY.EMPTY_LICENSE;
      let testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                         LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.IMAGE.STANDARD;
      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.VIDEO.VIDEO_HD;
      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.VECTOR_ASSETS.STANDARD;
      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.ASSETS_3D.STANDARD;
      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.TEMPLATES.STANDARD;
      testFn = () => LicenseParamsUtils.validateContentLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);
    });
  });

  // Tests for validateContentLicenseParams function
  describe('validateMemberAbandonLicenseParams', () => {
    beforeEach(function () {
      this.accessToken = 'testAccessToken';
    });

    it('should throw error contentId expects Integer if contentId argument passed is not Integer', function () {
      let testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 'test', 'STANDARD');
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, [], 'STANDARD');
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, {}, 'STANDARD');
      expect(testFn).to.throw(/contentId missing or contentId is not of type Integer/);
    });

    it('should throw error state expects string if state argument passed is not string', function () {
      let testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken,
                                                                               1234, 1);
      expect(testFn).to.throw(/state missing or state is not of type string/);

      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 1234,
                                                                           []);
      expect(testFn).to.throw(/state missing or state is not of type string/);

      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 1234,
                                                                           {});
      expect(testFn).to.throw(/state missing or state is not of type string/);

      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 1234);
      expect(testFn).to.throw(/state missing or state is not of type string/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(undefined, 1234,
                                                                                'not_possible');
      expect(testFn).to.throw(/access Token missing or not of type string/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(4, 1234, 'NOT_PURCHASED');
      expect(testFn).to.throw(/access Token missing or not of type string/);
    });

    it('should throw error for unsupported license state', function () {
      const testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 1234, 'myLicenseState');
      expect(testFn).to.throw(/License state not supported!/);
    });

    it('should not throw error for supported license state', function () {
      let LICENSE_STATE = Constants.PURCHASE_STATE_PARAMS.NOT_PURCHASED;
      let testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken,
                                                                               1234, LICENSE_STATE);
      expect(testFn).to.not.throw(Error);

      LICENSE_STATE = Constants.PURCHASE_STATE_PARAMS.OVERAGE;
      testFn = () => LicenseParamsUtils.validateMemberAbandonLicenseParams(this.accessToken, 1234,
                                                                           LICENSE_STATE);
      expect(testFn).to.not.throw(Error);
    });
  });

  // Tests for validateMemberProfileLicenseParams function
  describe('validateMemberProfileLicenseParams', () => {
    beforeEach(function () {
      this.accessToken = 'testAccessToken';
    });

    it('should throw error contentId expects Integer if contentId argument passed is not Integer', function () {
      const LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.IMAGE.STANDARD;
      let testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 'test', LICENSE_TYPE);
      expect(testFn).to.throw(/contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, [],
                                                                     LICENSE_TYPE);
      expect(testFn).to.throw(/contentId is not of type Integer/);

      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, {},
                                                                     LICENSE_TYPE);
      expect(testFn).to.throw(/contentId is not of type Integer/);
    });

    it('should throw error license expects string if license argument passed is not string', function () {
      let testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken,
                                                                     1234, 1);
      expect(testFn).to.throw(/license is not of type string/);

      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1234,
                                                                            {});
      expect(testFn).to.throw(/license is not of type string/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(undefined, 1234, 'STANDARD');
      expect(testFn).to.throw(/access token missing or not of type string!/);
    });

    it('should throw error Access Token missing if accessToken is not provided', () => {
      const testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(4, 1234, 'STANDARD');
      expect(testFn).to.throw(/access token missing or not of type string!/);
    });

    it('should throw error for unsupported license type', function () {
      const testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1, 'myLicenseType');
      expect(testFn).to.throw(/License type not supported!/);
    });

    it('should not throw error for unsupported license type', function () {
      let LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.EMPTY.EMPTY_LICENSE;
      let testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                         LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.IMAGE.STANDARD;
      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.VIDEO.VIDEO_HD;
      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.VECTOR_ASSETS.STANDARD;
      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.ASSETS_3D.STANDARD;
      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);

      LICENSE_TYPE = Constants.LICENSE_STATE_PARAMS.TEMPLATES.STANDARD;
      testFn = () => LicenseParamsUtils.validateMemberProfileLicenseParams(this.accessToken, 1,
                                                                     LICENSE_TYPE);
      expect(testFn).to.not.throw(Error);
    });
  });

  // Tests for validateReferenceData function
  describe('validateReferenceData', () => {
    it('should throw error cceAgency expects Array if cceAgency argument passed is not Array', () => {
      let testFn = () => LicenseParamsUtils.validateReferenceData('test');
      expect(testFn).to.throw(/cceAgency is not of type array/);

      testFn = () => LicenseParamsUtils.validateReferenceData({});
      expect(testFn).to.throw(/cceAgency is not of type array/);

      testFn = () => LicenseParamsUtils.validateReferenceData(1234);
      expect(testFn).to.throw(/cceAgency is not of type array/);
    });

    it('should throw error for unsupported reference Data object', () => {
      let testFn = () => LicenseParamsUtils.validateReferenceData([{ id: '', value: 'test' }]);
      expect(testFn).to.throw(/id missing or id is not of type Integer!/);

      testFn = () => LicenseParamsUtils.validateReferenceData([{ value: 'test' }]);
      expect(testFn).to.throw(/id missing or id is not of type Integer!/);

      testFn = () => LicenseParamsUtils.validateReferenceData([{ id: {}, value: 'test' }]);
      expect(testFn).to.throw(/id missing or id is not of type Integer!/);

      testFn = () => LicenseParamsUtils.validateReferenceData([{ id: 123 }]);
      expect(testFn).to.throw(/value missing or value is not of type string!/);

      testFn = () => LicenseParamsUtils.validateReferenceData([{ id: 123, value: {} }]);
      expect(testFn).to.throw(/value missing or value is not of type string!/);

      testFn = () => LicenseParamsUtils.validateReferenceData([{ id: 123, value: [] }]);
      expect(testFn).to.throw(/value missing or value is not of type string!/);
    });
  });
});
