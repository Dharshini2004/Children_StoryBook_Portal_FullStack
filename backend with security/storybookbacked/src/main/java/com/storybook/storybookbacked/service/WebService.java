package com.storybook.storybookbacked.service;

import java.util.List;

import com.storybook.storybookbacked.dto.request.SiteRequest;
import com.storybook.storybookbacked.dto.response.SiteResponse;



public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}
