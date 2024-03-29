<?php
namespace controllers;

use core\api;

class project extends baseController
{
    public function index()
    {
        $project = api::get('projects/get', ['meta_id' => $this->meta->id]);

        if ( !empty($project)&&($project->active)) {

            $this->render('projects/item', [
                'project' => $project
            ]);

        } else {
            header('HTTP/1.1 404 Not Found');
            $this->meta->title_en = $this->settings->not_found_title_en;
            $this->meta->description_en = $this->settings->not_found_desc_en;
            $this->meta->keywords_en  = $this->settings->not_found_keywords_en;
            $this->meta->title_ru  = $this->settings->not_found_title_ru;
            $this->meta->description_ru  = $this->settings->not_found_desc_ru;
            $this->meta->keywords_ru  = $this->settings->not_found_keywords_ru;
            $this->render('404', []);
        }
    }

    public function request()
    {

    }
}